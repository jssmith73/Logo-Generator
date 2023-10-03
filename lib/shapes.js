class Shape {
    constructor (text, textColor, shape, shapeColor, shapeText) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.shapeText = shapeText;
    };

    showDate() {
        console.log(`${this.text}, ${this.textColor}, ${this.shape}, ${this.shapeColor}, ${this.shapeText}`)
    }
};

    class Circle extends Shape {
        constructor(text, textColor, shape, shapeColor, shapeText) {
            super(text, textColor, shape, shapeColor, shapeText)
            this.syntax = [];
        }

        addSyntax(syn) {
            this.syntax.push(syn);
        }
    }

    
        
    
    class Triangle extends Shape {     
        generateShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${ansgwers.color}" />`
        };
    };

    class Square extends Shape {
        generateShape() {
        return `<rect x="90" y="40" width="120" height="120" fill="${answers.color}" />`
        };
    };

   
    const createLogo = (answers) => {
        switch (answers.shape) {
            case 'circle':
                logo = new Circle(`<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`)
                break
            case 'triangle':
                logo = new Triangle(`<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`);
                break
            default:
                logo = new Square(`<rect x="90" y="40" width="120" height="120" fill="${answers.shapeColor}" />`);
        };

        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.logo}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" style="text-align:center;">${answers.text}</text>
    </svg>`
    };

    

    module.exports = createLogo;