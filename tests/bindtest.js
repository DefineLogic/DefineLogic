const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person2.fullName());

var person = {
    name: 'Kamal Doe',
    getName: function() {
        console.log(this.name);
    }
};
var a = person.getName;
a();
var b = function() { person.getName(); }
b();
let f = person.getName.bind(person);
f();
// setTimeout(function() {
//     person.getName();
// }, 500);
// setTimeout(f, 500);


let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};
let aa = function() { flyer.fly(111) };
aa();
let run = runner.run.bind(flyer, 20);
run();




const aaa = {
    x: 42,
    getX: function(a1) {
        return this.x + " " + a1;
    }
};

const unboundGetX = aaa.getX;
console.log(unboundGetX(21)); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(aaa, 21);
console.log(boundGetX());
// expected output: 42