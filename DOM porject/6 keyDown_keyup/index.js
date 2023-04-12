const text = document.getElementById("clickme");
const box = document.getElementById("box");
document.addEventListener("keyup" ,function(x){
    text.innerText = x.key + " is up";
})

document.addEventListener("keydown" ,function(x){
    text.innerText = x.key + " is down";
})