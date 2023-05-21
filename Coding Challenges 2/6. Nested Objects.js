// function extractNameAndStreet(person) {
//     const { name, address: { street } } = person;
//     return { name, street };
//   }
  
//   // Example usage
//   const person = {
//     name: 'John Doe',
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       country: 'USA'
//     }
//   };
  
//   const result = extractNameAndStreet(person);
//   console.log(result); // { name: 'John Doe', street: '123 Main St' }
  

function extract(person){
    const {name,address:{street}}=person
    return {name,street};
}
const person = {
       name: "Mithun",
       age:21,
       address:{

           street: "B8 block B,industrial Area.",
           city: "Sector 62,Nioda",
             country: "Uttar pardesh"
        }
}
const result = extract(person);
console.log(result)
  