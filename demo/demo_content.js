
const cfg = {
    output: {
        info: {
            author: "@PeterCabot",
            title: "GhostWire",
            subject: "@LievThibot"
        }
    },
    fonts: {
        Symbol: {
            normal: "**/NotoEmoji-Regular.ttf"
        }
    },
    styles: {
        default: {
            fontSize: 6
        },
        toc: {
            fontSize: 8
        },
        code: {
            font: "Body",
        },
        doclink: {
            bold: true,
            color: "#666666"
        },
        link: {
            color: "#666666",
            decoration: "underline"
        },
        h1: {
            color: "#666666"
        },
        h2: {
            color: "#666666"
        },
        h3: {
            color: "#666666"
        },
        h4: {
            color: "#666666"
        },
        italic: {
            color: "#666666"
        },
        bold: {
            color: "#666666"
        }
    },
    define: {}
};

const MakeBook = require('../index.js')
const book = new MakeBook(cfg);

book.content(`
### EXPORT
* [2024-05-20 11:12pm]
    * _Martan: Hola!_
    * **@LievThibot:** Luego, el pacto Eisenhower en 1954.
    * **@LievThibot:** ¿Nunca te has preguntado por qué hubo tantos avances tecnológicos a partir de 1954?
    * **@LievThibot:** Todo eso vino de alguna parte.
    * **@LievThibot:** Pero cada trato tiene un precio. Y este fue particularmente alto.
    * **@LievThibot:** Así comenzaron los "experimentos".

* [2024-05-20 11:12pm]
    * _Martan: Hola Mundo!_
    * @LievThibot: Luego, el pacto Eisenhower en 1954.
    * @LievThibot: ¿Nunca te has preguntado por qué hubo tantos avances tecnológicos a partir de 1954?
    * @LievThibot: Todo eso vino de alguna parte.
    * @LievThibot: Pero cada trato tiene un precio. Y este fue particularmente alto.
    * @LievThibot: Así comenzaron los "experimentos".


`);


const fontFiraCode = {
    normal: '**/FiraCode-Regular.ttf',
    bold: '**/FiraCode-Bold.ttf',
    italics: '**/FiraCode-Light.ttf',
    light: '**/FiraCode-Light.ttf',
}

book.font(fontFiraCode, 1.6).save('chat-11.pdf').then(() => {
    console.log('PDF saved successfully!');
}).catch(err => {
    console.error('Error saving PDF:', err);
});