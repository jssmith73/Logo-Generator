class Shape {
    constructor (text, textColor, shape, shapeColor, shapeText) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.shapeText = shapeText;
    };
};

    class Circle extends Shape {
        constructor(shapeColor) {
        super(shapeColor);
        this.shapeColor = shapeColor;
        }
        generateShape() {
            return `<circle cx="25" cy="75" r="20" fill="${Shape.shapeColor}" />`
        };
    };    

    class Triangle extends Shape {     
        generateShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        };
    };

    class Square extends Shape {
        constructor(shapeColor) {};
        generateShape() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
        };
    };

   
    const createLogo = (answers) => {
        switch (answers.shape) {
            case 'circle':
                logo = new Circle(this.shapeColor)
                break
            case 'triangle':
                logo = new Triangle(shapeColor);
                break
            default:
                logo = new Square(shapeColor);
        };

        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${logo.generateShape()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" style="text-align:center;">${answers.text}</text>
    </svg>`
    };

    

    module.exports = createLogo;