async function getCombinedData(){
    const [data1,data2]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((rensponse)=>
        rensponse.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((rensponse)=>
        rensponse.json()
        ),
        ]);
        const combinededata={
            todo:data1,
            post:data2,
        };
        return combinededata;
}
getCombinedData().then((data)=>console.log(data));