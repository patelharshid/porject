function doublearray(arr,callback)
{
    const doublearr=arr.map((num)=>{
        return callback(num);
    });
    return doublearr;
}
const or=[1,2,3,4,5];
function callback(num)
{
    return num*2;
}
const arrr=doublearray(or,callback)
console.log(arrr)