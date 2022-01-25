"use strict";
var timer;
var i = 0;
var speed = 250;
var animationArray;
var e = document.getElementById("animations");

function startAnimation() {
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("animations").disabled = true;
    document.getElementById("myTextArea").value = "";
    var e = document.getElementById("animations");
    var animationType = e.value;
    animationArray = ANIMATIONS[animationType].split("=====");
    timer = setInterval(animate, speed, animationArray);
}

function stopAnimation() {
    clearInterval(timer);
    document.getElementById("animations").disabled = false;
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("startBtn").disabled = false;

}

function animate(animationArray) {
    document.getElementById("myTextArea").value = animationArray[i]
    i++;
    if (i == animationArray.length)
        i = 0;
}

function toggleSpeed() {
    var checkBox = document.getElementById("speed");
    if (checkBox.checked == true) {
        clearInterval(timer);
        timer = setInterval(animate, 50, animationArray);
    }
    if (checkBox.checked == false) {
        clearInterval(timer);
        timer = setInterval(animate, 250, animationArray);

    }
}

function changeFontSize() {
    document.getElementById("myTextArea").style.fontSize = document.getElementById("sizes").value;
}