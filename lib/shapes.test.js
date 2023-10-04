const createLogo = require('./shapes');

describe('create square', () => {
    it("creates square with a specified shape and color", () => {
    const square =  `<rect x="90" y="57" width="120" height="120" fill="green" />`;
    createLogo
    }
    )})

test("creates user's shape of choice with the corresponding text and color", () => {
    const triangleSvg = '<polygon points="150, 18 244, 182 56, 182" width="300" height="300" fill="${this.shapeColor}" />'
    expect(createLogo()).toBe()
})

test("creates user's shape of choice with the corresponding text and color", () => {
    const circleSvg = '<circle cx="150" cy="125" r="80" width="300" height="300" fill="${this.shapeColor}" />'
    expect(createLogo()).toBe()
})