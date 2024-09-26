# 📖 MakeBook

MakeBook is a Node.js class that allows you to generate PDF documents from Markdown content effortlessly. It leverages the power of the `makepdf` library to convert Markdown into beautifully formatted PDFs. ✨

## 🚀 Features

- **Simple Configuration**: Easily customize your PDF output with straightforward configuration options.
- **Markdown Support**: Write your content in Markdown, and MakeBook handles the conversion.
- **Styling Options**: Customize fonts, styles, and layouts to match your desired aesthetic.
- **Automatic Numbering and TOC**: Automatically generate numbered headings and a table of contents.
- **Inline Formatting**: Use Markdown and extended syntax for bold, italics, code, and more.
- **Block Elements**: Support for paragraphs, headings, lists, code blocks, and quotes.
- **Tables and Columns**: Create complex tables and column layouts with ease.
- **Transclusion**: Include content from other files or images seamlessly.

## 🛠️ Installation

First, make sure you have Node.js and NPM installed.

```bash
npm install makebook
```

## 📚 Usage

### Example: Creating a Book with Minimal Configuration

Here's how you can create a PDF book by specifying only the `input.baseDir` in the configuration:

```javascript
const fs = require('fs');
const MakeBook = require('makebook');

const config = {
    input: {
        baseDir: "my-book", // Directory containing your Markdown files
    },
    output: {
        info: {
            author: "Your Name",
            title: "My Awesome Book",
            subject: "Markdown to PDF Conversion"
        }
    }
};

const book = new MakeBook(config);

book.save('my-awesome-book.pdf')
    .then(() => {
        console.log('📄 PDF saved successfully!');
    })
    .catch(err => {
        console.error('❌ Error saving PDF:', err);
    });
```

## ⚙️ Configuration Options

- **input**: Input options.
  - `baseDir`: Base directory for input files.
  - `entry`: Entry Markdown file (defaults to `index.md` if not specified).
- **output**: Output options.
  - `info`: PDF document information (author, title, subject, etc.).
  - `file`: Output PDF file name.
- **fonts**: Font configurations.
- **styles**: Styles for different document elements.
- **define**: Additional definitions for dynamic content insertion.

### 📝 Example 1: Creating a Simple PDF from directory

```javascript
const config = {
    input: {
        baseDir: "my-book",
    },
    output: {
        info: {
            author: "Your Name",
            title: "Styled Book",
            subject: "Advanced Styling"
        }
    },
    fonts: {
        Roboto: {
            normal: '**/Roboto-Regular.ttf',
            bold: '**/Roboto-Bold.ttf',
            italics: '**/Roboto-Italic.ttf',
        }
    },
    styles: {
        default: {
            fontSize: 12,
            font: 'Roboto',
        },
        h1: {
            fontSize: 24,
            bold: true,
            color: "#333333"
        },
        code: {
            font: "Roboto",
            fontSize: 10,
            color: "#FF5722"
        }
    }
};
```

### 🎨 Example 2: Using Custom Fonts and Styles

```javascript
const MakeBook = require('makebook');

const config = {
    output: {
        info: {
            author: "Jane Smith",
            title: "Custom Example",
            subject: "Some countries"
        }
    },
    styles: {
        default: {
            fontSize: 10,
            lineHeight: 1.5
        },
        h1: {
            fontSize: 22,
            bold: true,
            color: "#4CAF50"
        }
    }
};

const book = new MakeBook(config);

book.content(`
# 🖌️ Custom Example

## Here's a list of some countries from around the world:

- 🇦🇷 Argentina
- 🇯🇵 Japan
- 🇧🇷 Brazil
- 🇦🇺 Australia
- 🇩🇪 Germany
`);

const fontInconsolata = {
    normal: '**/Inconsolata-Regular.ttf',
    bold: '**/Inconsolata-Bold.ttf',
    italics: '**/Inconsolata-Italic.ttf'
};

book.font(fontInconsolata)
    .save('custom-styles.pdf')
    .then(() => {
        console.log('📄 PDF saved successfully!');
    })
    .catch(err => {
        console.error('❌ Error saving PDF:', err);
    });
```

## 🧪 Check Examples

For more you can refer to the `/demo` directory in the project repository. These demonstrations provide structured illustrations of various features and configurations:

1. **Manual**: 
   - File: `/demo/demo_manual.js`
   - It loads the configuration from the [`/demo/manual`](https://github.com/clasen/MakeBook/tree/master/demo/manual) directory.
   - It generates a PDF named [`manual.pdf`](https://github.com/jcormont/makepdf/blob/HEAD/manual.pdf).

2. **Formal**: 
   - File: `/demo/demo_formal.js`
   - It loads the configuration from the [`/demo/formal`](https://github.com/clasen/MakeBook/tree/master/demo/formal) directory.

## ✏️ Writing Your Content

Create your content in Markdown format. MakeBook supports standard Markdown syntax and extends it with additional features:

### Inline Formatting

- **Bold and Italics**: Use `**bold**` or `_italics_` for styling text.
- **Code**: Use backticks `` `code` `` for inline code snippets.
- **Links**: `[Link Text](https://example.com)` creates a clickable link.
- **Automatic Replacements**: Typographic enhancements like converting `--` to em-dashes.

### Blocks

- **Headings**: Use `#`, `##`, `###`, and `####` for headings.
- **Lists**: Create ordered and unordered lists using `-`, `*`, or numbers.
- **Code Blocks**: Wrap code with triple backticks for formatted code blocks.
- **Quotes**: Use `>` for blockquotes.

### Tables

Create tables using pipe `|` characters:

```markdown
| Column 1 | Column 2 |
| -------- | -------- |
| Data 1   | Data 2   |
```

### Automatic Numbering and TOC

- Use `\\()` to insert automatic numbering for sections.
- Insert a table of contents using the `\\toc` tag on a separate line.

### Transclusion

Include content from other files or images:

- **Images**: `\\image(plant.png)`
- **Include Files**: `\\include(other.md)`

## 🎨 Customization

You can customize the appearance of your PDF by defining styles and fonts in the configuration. Override default styles or create new ones to match your branding.

### Fonts

Specify custom fonts by providing paths to font files:

```javascript
const fontRoboto = {
    normal: '**/Roboto-Regular.ttf',
    bold: '**/Roboto-Bold.ttf',
    italics: '**/Roboto-Italic.ttf'
};

book.font(fontRoboto);
```

### Styles

Define styles for different elements:

```javascript
const config = {
    styles: {
        h1: {
            fontSize: 26,
            bold: true,
            color: "#0000FF"
        },
        p: {
            fontSize: 12,
            lineHeight: 1.5
        }
    }
};
```

## 🙏 Acknowledgments

MakeBook utilizes the fantastic [`makepdf`](https://www.npmjs.com/package/makepdf) library to convert Markdown to PDF. Special thanks to its contributors for making PDF generation in Node.js a breeze!

## 📬 Contact

For questions or suggestions, please open an issue in the [GitHub repository](https://github.com/clasen/MakeBook) or contact the project maintainer.

## 📄 License
The MIT License (MIT)

Copyright (c) Martin Clasen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

