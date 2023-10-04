const {Circle, Square, Triangle} = require('./shapes');


//Test for Circle

describe('Shape', () => {

describe('circle', () => {
    
it('should compare the shape svg input with the correct outcome', () => {
const circle = new Circle();
circle.setColor("blue");
expect(circle.render()).toEqual('<circle cx="150" cy="120" r="80" width="300" height="300" fill="blue" />');})})});




//Test for Square

describe('Shape', () => {

describe('square', () => {
        
it('should compare the shape svg input with the correct outcome', () => {
const square = new Square();
square.setColor("blue");
expect(square.render()).toEqual('<rect x="90" y="57" width="120" height="120" fill="blue" />');})})});



// Test for Triangle

describe('Shape', () => {

describe('triangle', () => {
        
it('should compare the shape svg input with the correct outcome', () => {
const triangle = new Triangle();
triangle.setColor("blue");
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" width="300" height="300" fill="blue" />');})})});