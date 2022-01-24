var x = 1;

function f(a) {
    var y = 2;
    var summ = function() {
        var z = 3;
        console.log(x + y + z + a);
    };
    y = 10;
    return summ;
}

var g = f(5);
g();