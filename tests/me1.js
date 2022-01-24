var foo = 1;

function bar() {
    console.log(foo)
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
}
bar();

var add = (function() {
    var counter = 0;
    var count = {
        add: function() { counter += 1; },
        reset: function() { counter = 0; }
    }
})();

function make_adder(a) {
    var counter = 0;
    return function() {
        counter += a;
        return counter;
    }
}

var add5 = make_adder(5);
add5();
add5();
console.log(add5()); // final counter value is 15

var add7 = make_adder(7);
add7();
add7();
console.log(add7()); // final counter value is 21