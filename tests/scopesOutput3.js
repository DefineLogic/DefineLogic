var x = 8;
var y = 4;

function a(n) {
    var b = function() {
        console.log(this);
        return n;
    };
    b();
    console.log(y);
    if (n > 0) {
        x--;
        n *= 2;
    }
    var y = 8;
    console.log("x:" + x + " y:" + y);
    return b;
}
var f = a(x);
console.log(f.call({ 'z': 50 }));

//