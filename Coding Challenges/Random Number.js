let delay=4000;
let delay1=delay-1000;
const counttime=setInterval(()=>{
    console.log(`${delay1/1000} seseconds remaining`)
    delay1-=1000;
    if(delay1<=0)
    {
        clearInterval(counttime);
    }
},1000);
setTimeout(()=>{
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random number: ${randomNumber}`);
},delay);
