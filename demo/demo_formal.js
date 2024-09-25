const MakeBook = require('../index.js');

const cfg = require('./formal.json');
const book = new MakeBook(cfg);

book.font('Charter', 1.8).save('formal.pdf').then(() => {
    console.log('PDF saved successfully!');
}).catch(err => {
    console.error('Error saving PDF:', err);
});