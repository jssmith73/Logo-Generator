class Shape {
    // constructor will take the text and textColor and we'll create a shapeColor but leave it blank
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = '';
    }
    // function for setting the color
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    generateShape() {
        return `<circle cx="150" cy="125" r="80" width="300" height="300" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    generateShape() {
        return `<polygon points="150, 18 244, 182 56, 182" width="300" height="300" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    generateShape() {
        return `<rect x="90" y="57" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

const createLogo = (answers) => {
    switch (answers.shape) {
        case 'circle':
            logo = new Circle();
            break;
        case 'triangle':
            logo = new Triangle();
            break;
        default:
            logo = new Square();
    }

    // here we call the setColor function to set the color
    logo.setColor(answers.shapeColor);

    return `<svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${logo.generateShape(answers)}
        <text x="150" y="125" 
        text-anchor="middle"
        dominant-baseline="middle"
        fill="${answers.textColor}" style="text-align:center;
        font-size:40">${answers.text}</text>
    </svg>`;
};

module.exports = createLogo, {Circle, Square, Triangle};