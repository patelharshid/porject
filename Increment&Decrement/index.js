let Dec=document.getElementById("decrement");
let Inc=document.getElementById("increment");
let Display=document.getElementById("ans");
let Reset=document.getElementById("reset");

function decvalue(){
    const value=Number(Display.innerText);
    Display.innerText=value-1;
}
Dec.addEventListener("click",decvalue);
Dec.addEventListener("Doubleclick",decvalue);
Dec.addEventListener("Mouseove",decvalue);
Dec.addEventListener("mouse out",decvalue);
Dec.addEventListener("onkeypress",decvalue);
Dec.addEventListener("keydown-keyup",decvalue);

function incvalue(){
    const value=Number(Display.innerText);
    Display.innerText=value+1;
}
Inc.addEventListener("click",incvalue);
Inc.addEventListener("Doubleclick",incvalue);
Inc.addEventListener("Mouseove",incvalue);
Inc.addEventListener("mouse out",incvalue);
Inc.addEventListener("onkeypress",incvalue);
Inc.addEventListener("keydown-keyup",incvalue);



function resetval(){
    Display.innerText = 0;
}
Reset.addEventListener("click",resetval);
    