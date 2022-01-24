var sayHello = function(name) {
    var text = 'Hello, ' + name;
    return function() {
        console.log(text);
    }
}

var helloTodd = sayHello("Todd");
helloTodd();

var helloTom = sayHello("Tom");
helloTom();

var test1 = (function(name) {
    var text = 'Hola, ' + name;
    return function() {
        console.log(text);
    }
})();
test1();

var test2 = (function(name) {
    console.log("hello");
})();

console.log(typeof test2);