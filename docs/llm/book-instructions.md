# MakeBook Instructions for LLM

## Creating an eBook from the long-book template

Quickly stub a new long ebook by copying `templates/long-book` into a new folder.

## Creating an eBook from scratch

1. **Configuration**: Create a `config.json` file in the root of your eBook directory. This file should define the input and output settings for your eBook. Here’s an example configuration:

```json
{
    "input": {
        "baseDir": "my-ebook", // Required: Base directory for input files
        "entry": "index.md"     // Required: Entry Markdown file
    },
    "output": {
        "file": "my-ebook.pdf", // Required: Output PDF file name
        "info": {
            "author": "Your Name", // Required: Author of the eBook
            "title": "My eBook Title", // Required: Title of the eBook
            "subject": "Subject of the eBook" // Required: Subject of the eBook
        }
    },
    "fonts": {
        "Symbol": {
            "normal": "**/NotoEmoji-Regular.ttf" // Optional: Custom font
        }
    },
    "define": {
        "test": true // Optional: Additional definitions
    },
    "styles": {
        "toc": {
            "fontSize": 8 // Optional: Style for table of contents
        },
        "doclink": {
            "bold": true,
            "color": "#3377dd" // Optional: Style for document links
        },
        "link": {
            "color": "#3377dd",
            "decoration": "underline" // Optional: Style for links
        },
        "h1": {
            "color": "#3377dd" // Optional: Style for H1 headings
        },
        "h2": {
            "color": "#3377dd" // Optional: Style for H2 headings
        },
        "h3": {
            "color": "#3377dd" // Optional: Style for H3 headings
        },
        "h4": {
            "color": "#3377dd" // Optional: Style for H4 headings
        }
    }
}
```

2. **Index File**: Create an `index.md` file that serves as the entry point for your eBook. This file should include links to the main sections or chapters of your eBook.

3. **Generating the PDF**: After organizing your files and creating the configuration, run the following command to generate your eBook:

```bash
npm run make pathToBook/
```

By following these guidelines, you can create a well-structured eBook that is easy to navigate and maintain.

## Transclusion
- Include content from other files or images using:
  - Images: `\\image(plant.png)`
  - Include Files: `\\include(other.md)`

## Configuration Options
- **Input**:
  - `baseDir`: Base directory for input files.
  - `entry`: Entry Markdown file (defaults to `index.md`).
- **Output**:
  - `info`: PDF document information (author, title, subject).
  - `file`: Output PDF file name.
- **Fonts**: Specify custom fonts by providing paths to font files.
- **Styles**: Define styles for different elements (e.g., headings, paragraphs).

## Usage
- To generate a PDF, run the command:
  ```bash
  npm run make <book-name>
  ```
- If no book name is provided, it defaults to rendering the demo/ book.
