const path = require('path');

module.exports = {
    input: {
        entry: path.join(__dirname, 'content.md'),
    },
    output: {
        fileName: path.join(__dirname, 'hello-world.pdf'),
        info: {
            title: 'Hello World',
            author: 'Claude',
            subject: 'A simple example book',
        },
    },
};
