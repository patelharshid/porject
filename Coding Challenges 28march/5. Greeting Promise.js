function greet(name){
    return new Promise((resolve)=>{
        const gree=`hello ${name}`;
        resolve(gree)
    });
}
greet("POOJA").then((Message)=>console.log(Message))