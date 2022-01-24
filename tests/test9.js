function init() {
    var name = "Mozilla";

    function displayName() {
        console.log(name);
    }
    displayName();
}
init();

function makeFunc() {
    let name = "Mozilla firefox";

    function displayName() {

        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();