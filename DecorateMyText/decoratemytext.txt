window.onload = function(){
    var btn = document.getElementById("btn");
    var pbtn = document.getElementById("pl_btn");
    var mbtn = document.getElementById("m_btn");
    var textArea = document.getElementById("ta");
    textArea.style.fontSize = "12pt";
    var checkBox = document.getElementById("bling");

    btn.addEventListener("click",sizeIncrease);
    pbtn.addEventListener("click",convertToPigLatin);
    mbtn.addEventListener("click",convertToMalkovich);

    checkBox.addEventListener("click",function(){
    if (checkBox.checked == true){
        textArea.style.fontSize = "24pt";
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecorationLine = "underline";
    } else {
        textArea.style.fontSize = null;
        textArea.style.fontWeight = null;
        textArea.style.color = null;
        textArea.style.textDecorationLine = null;
    }})

    function sizeIncrease(){
        setInterval(function increment(){
        var size = textArea.style.fontSize.replace("pt","");
        var newSize = parseInt(size)+2;
        textArea.style.fontSize = newSize+"pt";
        },500);
    }

    function convertToPigLatin(){
        var vowels = ["a","e","i","o","u"];
        var content = textArea.value.replace(/\t/g,"");
        var array = content.split(" ");
        var result = "";
        for(var i=0;i<array.length;i++){
            let str = array[i].toLowerCase();
            var suffix = "";
            var vowelFound = false;
            for(var j=0;j<str.length;j++){
                var letter = str.charAt(j);
                if(vowels.includes(letter) && !vowelFound){
                    result += str.substring(j,str.length)+suffix+ "ay ";
                    vowelFound = true;
                    break;
                }else{
                    suffix+= str.charAt(j);
                }
            }
            if(!vowelFound){
                result += str+ "ay " ;
            }
        }
        textArea.value = result;
    }

    function convertToMalkovich(){
        var content = textArea.value.replace(/\t/g,"");
        var array = content.split(" ");
        var result = "";
        for(var i=0;i<array.length;i++){
            let str = array[i];
            if(str.length>4){
                result += "Malkovich ";
            } else {
                result += array[i]+" ";
            }
        }
        textArea.value = result;
    }


}