function minmax(arr)
{
    const max=Math.max(...arr);
    const min=Math.min(...arr);

    return {min,max}
}
const numbers = [5, 2, 7, 1, 9];
console.log(minmax(numbers))