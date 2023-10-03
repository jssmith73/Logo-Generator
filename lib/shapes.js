class Shape {
    constructor (text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.syn = '';
    };
};

    class Circle extends Shape {
        constructor(text, textColor, shape, shapeColor, syn) {
            super(text, textColor, shape, shapeColor, syn);
            // syn = `<circle cx="150" cy="100" r="80" fill="green" />`;
        };
    };
    
    class Triangle extends Shape {
        constructor(text, textColor, shape, shapeColor, syn) {
            super(text, textColor, shape, shapeColor, syn);
            // return `<polygon points="150, 18 244, 182 56, 182" fill="${answers.color}" />`;
        };
    };

    class Square extends Shape {
        constructor(text, textColor, shape, shapeColor, syn) {
            super(text, textColor, shape, shapeColor, syn);
    
            // return `<rect x="90" y="40" width="120" height="120" fill="${answers.color}" />`;
        };
    };

    const createLogo = (answers) => {
        let logo = new Shape (answers.text, answers.textColor, answers.shapeColor, answers.syn);
        switch (answers.shape) {
            case 'circle':
                logo = new Circle(answers.text, answers.textColor, answers.shapeColor);
                syn = `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`;
                break
            case 'triangle':
                logo = new Triangle(answers.text, answers.textColor, answers.shapeColor);
                syn = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
                break
            default:
                logo = new Square(answers.text, answers.textColor, answers.shapeColor);
                syn = `<rect x="90" y="40" width="120" height="120" fill="${answers.shapeColor}" />`;
        };

        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        ${answers.shape.syn}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" style="text-align:center;">${answers.text}</text>
    </svg>`
    };

    module.exports = createLogo;