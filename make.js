const fs = require('fs');
const path = require('path');
const MakeBook = require('./index');

const defaultBooks = ['demo'];

async function makeBooks(books = defaultBooks) {
  for (const book of books) {
    console.log(`Rendering book: ${book}`);
    const bookPath = path.join(__dirname, book);
    
    if (!fs.existsSync(bookPath)) {
      console.error(`Book directory not found: ${bookPath}`);
      continue;
    }

    const indexPath = path.join(bookPath, 'index.js');
    if (!fs.existsSync(indexPath)) {
      console.error(`Index file not found: ${indexPath}`);
      continue;
    }

    const bookConfig = require(indexPath);
    const makeBook = new MakeBook(bookConfig);
    
    try {
      await makeBook.save(bookConfig.output.fileName);
      console.log(`Book ${book} rendered successfully: ${bookConfig.output.fileName}`);
    } catch (error) {
      console.error(`Error rendering book ${book}:`, error);
    }
  }
}

const booksToRender = process.argv.slice(2);
makeBooks(booksToRender.length > 0 ? booksToRender : undefined);
