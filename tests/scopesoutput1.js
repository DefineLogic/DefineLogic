x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    console.log(x);
    console.log(a);
    a = 13;
    var f = function(a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(a);
    console.log(b);
    var x = 10;
}
c();
console.log(b);
console.log(x);

//  undefined 8 8 9 10 1 
console.log();


// var x = 9;

// function myFunction() {
//     return x * x;
// }
// console.log(myFunction());
// x = 5;
// console.log(myFunction());