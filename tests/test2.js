var x = 10;
(function main() {
    var x = 40;
    console.log(x);
    x = 20;
    if (x > 0) {
        x = 30;
        console.log(x);
    }
    var f = function(x) {
        console.log(x);
    }
    f(50);
})();
x = 70;
console.log(x);
console.log();


let a = 17;
const func = x => {
    let a = x;
};
func(99);
console.log(a);