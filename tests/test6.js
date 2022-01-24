function getAlert(outstr, outstr2) {
    return function(str) {
        console.log(str + "outstr:" + outstr + "outstr2:" + outstr2);
    }
}

var whatsUp = getAlert("hi");
whatsUp(function a() { console.log("joker"); });