async function fetch(){
    const respones=await
    fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data=await respones.json();
    console.log(data);
}
fetch();