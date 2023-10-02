class shape {
    constructor (text, textColor, shape, shapeColor, syn) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.syn = syn;
    };
};

    class circle extends shape {
        constructor(text, textColor, shape, shapeColor, syn) {
            super(text, textColor, shape, shapeColor, syn);
            // return `<circle cx="150" cy="100" r="80" fill="${answers.color}" />`;
        };
    };
    
    class triangle extends shape {
        constructor(text, textColor, shape, shapeColor, syn) {
            super(text, textColor, shape, shapeColor, syn);
            // return `<polygon points="150, 18 244, 182 56, 182" fill="${answers.color}" />`;
        };
    };

    class square extends shape {
        constructor(text, textColor, shape, shapeColor, syn) {
            super(text, textColor, shape, shapeColor, syn);
    
            // return `<rect x="90" y="40" width="120" height="120" fill="${answers.color}" />`;
        };
    };

    const createLogo = (answers) => {
        let logo = new shape (answers.text, answers.textColor, answers.shapeColor);
        switch (answers.shape) {
            case 'circle':
                logo = new circle(shape.text, answers.textColor, answers.shapeColor);
                logo.syn = `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`;
                break
            case 'triangle':
                logo = new triangle(answers.text, answers.textColor, answers.shapeColor);
                logo.syn = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
                break
            default:
                logo = new square(answers.text, answers.textColor, answers.shapeColor);
                logo.syn = `<rect x="90" y="40" width="120" height="120" fill="${answers.shapeColor}" />`;
        };

        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:300px;height:300px;">
        ${answers.syn}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" style="text-align:center;">${answers.text}</text>
    </svg>`
    };

    module.exports = createLogo();