function Checker(array) 
{
    return function(number) 
    {
      return array.includes(number);
    };
}
const numbers = [1, 2, 3, 4, 5];
const checkNumber = Checker(numbers);

console.log(checkNumber(3)); 
console.log(checkNumber(6));
 