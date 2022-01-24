class Carr {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(typeof Carr);

x = 1;

function a() {
    console.log(x);
}
a();

const obj = {
    name: "fred",
    major: "music",
    numberFunction: function(a, b) {
        if (a == b)
            return Math.pow(a, 2) + Math.pow(b, 2)
        else
            return a - b;
    }
}

console.log(obj.numberFunction(2, 3));

function Employee(name, salary, position) {
    this.name = name;
    this.salary = salary;
    this.position = position;
}

const emp1 = new Employee("Billie", 20000, "Senior Engineer");
const emp2 = new Employee("Joe", 30000, "Junior Engineer");

function product(...more) {
    var result = 1;
    for (let i = 0; i < more.length; i++) {
        result *= more[i];
    }
    return result;
}
console.log(product(1, 2, 3));

var findMax = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            return a;
        }
        if (b > c) {
            return b;
        }
    }
    return c;
}
console.log(findMax(20, 11, 24));