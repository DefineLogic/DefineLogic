function f() {
    let a = 1,
        b = 20,
        c;
    let a = 2;
    console.log(a + " " + b + " " + c);

    function g() {
        var b = 300,
            c = 4000;
        console.log(a + " " + b + " " + c);
        a = a + b + c;
        console.log(a + " " + b + " " + c);
    }
    console.log(a + " " + b + " " + c);
    g();
    console.log(a + " " + b + " " + c);
}
f();