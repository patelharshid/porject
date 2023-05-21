function removeDuplicates(el)
{
    return [...new Set(el)]
}
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);


