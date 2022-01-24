var a = true;
var b = false;
var giveMePizza = function() {
    return new Promise(function(resolve, reject) {
        if (a) {
            resolve("This is true.");
        } else if (b) {
            reject("This is false.");
        }
    })
}

giveMePizza().then(data => console.log(data)).catch(err => console.log(err));