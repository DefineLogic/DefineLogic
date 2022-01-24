console.log("hi");

setTimeout(booyah, 2000);
//setTimeout(booyah(2), 2000);

function booyah(a) {
    console.log("hello" + a);
}

function booyah1() {
    console.log("hello");
}

function booyah2() {
    console.log("hello 2");
}

function getA(str) {
    return function() {
        console.log(str);
    }
}
var a = getA("hi whats up");
a();

var aa = 12;

function scopee() {
    var bb = 13;
    //console.log(cc);

    function scopee2() {
        var cc = 50;
        console.log(aa);
        yo
    }
    scopee2();
};
scopee();
//console.log(bb);

function hoistCheck() {
    a = 10;
    console.log(a);
    //let a;
}
hoistCheck();

function hoistCheck2() {
    var b = 30;
    console.log(a + b);
    var a = 20; //only declarations are hoisted.
}
hoistCheck2();