const path = require('path');

module.exports = {
    input: {
        entry: path.join(__dirname, 'index.md'), // Input file for the book
    },
    output: {
        fileName: path.join(__dirname, 'long-book.pdf'), // Output PDF file
        info: {
            title: 'Long Book',
            author: 'Author Name', // Replace with actual author name
            subject: 'Description of the long book',
        },
    },
};
