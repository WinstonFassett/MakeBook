# Organizing Large eBooks with Multiple Files and Transclusion

When creating large eBooks using multiple Markdown files, it's essential to maintain a clear and organized folder structure. This not only helps in managing the content but also facilitates the use of transclusion for including content from other files.

## Sample Folder Structure

Here’s a suggested folder structure for organizing your eBook:

```
/my-ebook
    /01-introduction
        introduction.md
        purpose.md
    /02-chapters
        /chapter-01
            chapter-01.md
            setup.md
        /chapter-02
            chapter-02.md
            advanced-topics.md
    /03-conclusion
        conclusion.md
    config.json
    index.md
```

### Guidelines for Naming Files
- Use **relevant names** for your content files that reflect their content. For example, instead of naming a file `01-00.md`, use `introduction.md` or `setup.md`.
- Organize files into directories based on their content type or chapter to enhance clarity and navigation.
- Utilize transclusion to include content from other files, making it easier to manage and update your eBook.

## Using Transclusion
- To include content from another file, use the following syntax:
  - Include Files: `\\include(path/to/file.md)`
