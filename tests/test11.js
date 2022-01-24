var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs[i] = function() {
        return i;
    };
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]() + "\n");

var funcs2 = [];
for (let i = 0; i < 5; i++) {
    funcs2[i] = function() {
        return i;
    };
}
console.log(funcs2[0]());
console.log(funcs2[1]());
console.log(funcs2[2]());
console.log(funcs2[3]());
console.log(funcs2[4]());