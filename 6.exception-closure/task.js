function parseCount(arg) {
    if (isNaN(Number.parseInt(arg))) {
        throw new Error('Невалидное значение');
    }
    return Number.parseInt(arg, 10);
}
parseCount('123f');


function validateCount(arg) {
    try {
        console.log('внутри блока трай');
        return parseCount(arg, 10);
    } catch (error) {
        return error;
    } finally {
        console.log('внутри блока finally');
    }
}
validateCount('123dddd', parseCount);


// задача 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.perimeter = null;
        this.area = null;

        if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.perimeter = this.a + this.b + this.c;
    }
    getArea() {
        const p = this.perimeter / 2;
        return (Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3)));
    }


}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea() {
                return ('Ошибка! Треугольник не существует');
            },
            getPerimeter() {
                return ('Ошибка! Треугольник не существует');
            },
        };
    }
}
getTriangle(2, 0, 0);


