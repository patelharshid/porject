const box = document.getElementById("container");
const clickme = document.getElementById("doubleclick");
box.addEventListener("dbclick", function(){
   clickme.innerText = "you use double Click";
});