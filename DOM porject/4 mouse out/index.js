const box = document.getElementById("box");
const clickme = document.getElementById("clickme");
box.addEventListener("mouseout", function(){
   clickme.innerText = "You just out the box";
});