const btn=document.getElementById("button");
const randmcolor=()=>{
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++)
    {
        cons=cons+val[Math.floor(Math.random()*16)];
    } 
    return cons;
};
 function chagencolor()
 {
    document.body.style.backgroundColor=randmcolor();
 }

 btn.addEventListener("click",chagencolor);