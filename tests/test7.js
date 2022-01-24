function findmax() {
    var i;
    var max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max)
            max = arguments[i];
    }
    return max;
}
var x = findmax(12, 13, 14, 2);
console.log(x);