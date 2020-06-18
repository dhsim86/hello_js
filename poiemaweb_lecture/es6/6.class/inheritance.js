class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    static staticMethod() {
        return 'staticMethod';
    }

    getDiameter() {
        return 2 * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Cylinder extends Circle {
    constructor(radius, height) {
        super(radius);
        this.height = height;
    }

    getArea() {
        return (this.height * this.getPerimeter()) + (2 * super.getArea());
    }

    getVolume() {
        return super.getArea() + this.height;
    }
}

const cylinder = new Cylinder(2, 10);

console.log(cylinder.getDiameter());
console.log(cylinder.getPerimeter());
console.log(cylinder.getArea());
console.log(cylinder.getVolume());

console.log(cylinder instanceof Cylinder);
console.log(cylinder instanceof Circle);

//
console.log(`cylinder.__proto__ === Cylinder.prototype: ${cylinder.__proto__ === Cylinder.prototype}`)
console.log(`Cylinder.prototype.__proto__ === Circle.prototype: ${Cylinder.prototype.__proto__ === Circle.prototype}`)
console.log(`Circle.prototype.__proto__ === Object.prototype: ${Circle.prototype.__proto__ === Object.prototype}`);
console.log(`Object.prototype.__proto__ === null: ${Object.prototype.__proto__ === null}`);

console.log(`Cylinder.__proto__ === Circle: ${Cylinder.__proto__ === Circle}`);
console.log(`Circle.__proto__ === Function: ${Circle.__proto__ === Function}`);
console.log(Circle.staticMethod());
console.log(Cylinder.staticMethod());
//

