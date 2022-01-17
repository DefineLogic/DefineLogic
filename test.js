console.log("hi");

setTimeout(booyah, 2000);
//setTimeout(booyah(2), 2000);

function booyah(a){ 
    console.log("hello"+a);
 }

function booyah1(){ 
   console.log("hello");
}

function booyah2(){ 
    console.log("hello 2");
 }

 function getA(str){
     return function(){
        console.log(str);
     }
 }
 var a = getA("hi whats up");
 a();
