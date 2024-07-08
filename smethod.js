let text = "abcdekghijkl";
let text1 = "name";
let text2 = "NAME";
let text4 = "shiv";
let text5 = "gupta";
let text6 = text4.concat(" ", text5);
let text8 = "      Hello World!      ";
let text9 = text8.trim();
// const lengthOfString = (document.getElementById("container").innerHTML =
//   text.length);
//   const charchterOfString =(document.getElementById ("container1")).innerHTML=text.charAt(7);
//   const charchterOfcode =(document.getElementById ("container2")).innerHTML=text.charCodeAt(4);
//   const charAt =(document.getElementById ("container3")).innerHTML=text.at(4);
//   const slice =(document.getElementById ("container4")).innerHTML=text.slice(5,9);
//   const uppercase =(document.getElementById ("container5")).innerHTML=text1.toUpperCase();
//   const LowerCase =(document.getElementById ("container6")).innerHTML=text2.toLowerCase();
//   const concat =(document.getElementById ("container7")).innerHTML=text6.concat();
//   const trim =(document.getElementById ("container8")).innerHTML=text9.trim();


function displayLength() {
  document.getElementById("containerv").innerHTML = text.length;   
}
function characterOfindex(){
    document.getElementById("container1").innerHTML = text.charAt(7);   
}
function characterOfcode(){
    document.getElementById("container2").innerHTML = text.charCodeAt(4);   
}
function characterOfString(){
    document.getElementById("container3").innerHTML = text.at(4);   
}
function characterOfSlice(){
    document.getElementById("container4").innerHTML = text.slice(5,9);   
}
function characterOfUppercase(){
    document.getElementById("container5").innerHTML = text1.toUpperCase();   
}
function characterOfLowercase(){
    document.getElementById("container6").innerHTML = text2.toLowerCase();   
}
function characterOfconcat(){
    document.getElementById("container7").innerHTML = innerHTML=text6.concat();   
}
function characterOfTrim(){
    document.getElementById("container8").innerHTML = innerHTML=text9.trim();   
}

