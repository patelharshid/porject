
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
  