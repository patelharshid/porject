const box = document.getElementById("box");
const clickme = document.getElementById("clickme");
box.addEventListener("mouseover", function(){
   clickme.innerText = "You come inside the box";
});