var timer = null;

var MODULE = (function() {
    return {
        rudyTimer: function() {
            if (timer === null) {
                timer = setInterval(rudy, 500);
            } else {
                clearInterval(timer);
                timer = null;
            }
        }
    }
})();

var rudyTimer = MODULE.rudyTimer;

function rudy() { // called each time the timer goes off
    document.getElementById("output").innerHTML += " Rudy!";
}