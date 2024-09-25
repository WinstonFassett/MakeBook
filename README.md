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
const MakeBook = require('./makebook');

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

### Sample Configuration with Styles and Fonts

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

- Use `\()` to insert automatic numbering for sections.
- Insert a table of contents using the `\toc` tag on a separate line.

### Transclusion

Include content from other files or images:

- **Images**: `\image(path/to/image.png)`
- **Include Files**: `\include(path/to/other.md)`

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

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 📬 Contact

For questions or suggestions, please open an issue in the repository or contact the project maintainer.