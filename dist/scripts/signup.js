var a;
var b;

document.querySelectorAll("input")[0].addEventListener("input",()=>{
    a = document.querySelectorAll("input")[0].value;
})

document.querySelectorAll("input")[1].addEventListener("input",()=>{
    b = document.querySelectorAll("input")[1].value;
})

document.querySelectorAll("button")[0].addEventListener("click",()=>{
    document.cookie = `username=${a}`
    document.cookie = `password=${b}`
})

if(document.cookie != ""){
    window.location.replace("home.html");
}