const fs = require("fs");
const path = require("path");
const os = require("os");
const { getConfig, findFontFiles, pageBreakBefore, getTableLayouts } = require("./node_modules/makepdf/dist/config");
const { getFooterFn } = require("./node_modules/makepdf/dist/content/footer");
const { OutputContext } = require("./node_modules/makepdf/dist/parser/context");
const { parseMarkdownFile } = require("./node_modules/makepdf/dist/parser/parse");
const PdfPrinter = require("pdfmake");

class MakeBook {
    constructor(config) {
        this.config = getConfig(config);

        const PROGRAM_NAME = "MakeBook"

        if (!this.config.output.info.creator)
            this.config.output.info.creator = PROGRAM_NAME;
        if (!this.config.output.info.producer)
            this.config.output.info.producer = PROGRAM_NAME;

        if (!this.config.output.info.author) {
            console.log("Warning: Missing author field in config (output.info.author)");
        }
        if (!this.config.output.info.title) {
            console.log("Warning: Missing title field in config (output.info.title)");
        }
        if (!this.config.output.info.subject) {
            console.log("Warning: Missing subject field in config (output.info.subject)");
        }
    }

    generate() {
        const context = new OutputContext(this.config);
        let content;
        try {
            let fileName = this.config.input.entry;
            if (this.config.input.baseDir) {
                fileName = path.resolve(this.config.input.baseDir, fileName);
            }
            content = parseMarkdownFile(fileName, context);
            context.updateRefs();
        } catch (err) {
            if (err.code === "PARSE_ERROR") {
                console.error(`*** Parse error (${err.fileName}:${err.line})\n${err.message}`);
            } else {
                console.error(err);
            }
            return process.exit(1);
        }
        return this.writePdf(content, context);
    }

    writePdf(content, context) {
        const fonts = findFontFiles(context.config.fonts);
        const printer = new PdfPrinter(fonts);
        const pdfDoc = printer.createPdfKitDocument({
            info: context.config.output.info,
            pageSize: context.config.output.pageSize,
            pageOrientation: context.config.output.pageOrientation,
            pageMargins: context.config.output.pageMargins,
            defaultStyle: context.config.styles.default,
            styles: context.config.styles,
            pageBreakBefore: pageBreakBefore,
            content: content,
            footer: getFooterFn(context.config),
        }, {
            tableLayouts: getTableLayouts(context.config),
        });

        return pdfDoc;
    }

    font(font, lineHeight = null) {
        if (typeof font === 'string') {
            font = {
                normal: '**/' + font + '-Regular.ttf',
                bold: '**/' + font + '-Bold.ttf',
                italics: '**/' + font + '-Italic.ttf'
            }
        }

        // this.config.fonts["Monospaced"] = font;
        this.config.fonts["Body"] = font;
        this.config.fonts["Body Bold"] = font;
        this.config.fonts["Body Light"] = font;

        this.config.fonts["Headings"] = font;
        this.config.fonts["Headings Bold"] = font;
        this.config.fonts["Headings Light"] = font;

        if (lineHeight !== null) {
            this.fontLineHeight(lineHeight);
        }

        return this;
    }

    fontLineHeight(lineHeight) {
        this.config.styles.default.lineHeight = lineHeight;
        this.config.styles.toc.lineHeight = lineHeight;
        // this.config.styles.code.lineHeight = lineHeight;
        return this;
    }

    async save(fileName) {
        const pdfDoc = this.generate();
        const dirName = path.dirname(fileName);
        if (!fs.existsSync(dirName)) fs.mkdirSync(dirName, { recursive: true });

        return new Promise((resolve, reject) => {
            const stream = fs.createWriteStream(fileName);
            pdfDoc.pipe(stream);
            pdfDoc.end();
            stream.on('finish', resolve);
            stream.on('error', reject);
        });
    }

    content(markdownContent) {
        const tmpDir = os.tmpdir();
        const tmpFile = path.join(tmpDir, `makebook_${Date.now()}.md`);

        fs.writeFileSync(tmpFile, markdownContent, 'utf8');

        this.config.input.entry = tmpFile;
        this.config.input.baseDir = tmpDir;

        return this;
    }
}

module.exports = MakeBook;