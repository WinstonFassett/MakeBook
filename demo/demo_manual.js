const MakeBook = require('../index.js');

const cfg = require('./manual.json');
const book = new MakeBook(cfg);

book.save('manual.pdf').then(() => {
    console.log('PDF saved successfully!');
}).catch(err => {
    console.error('Error saving PDF:', err);
});