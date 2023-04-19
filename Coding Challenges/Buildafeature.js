let ind=80
let items=[
    {item:"apple" , price: 50},
    {item:"banana" , price: 30},
    {item:"orange", price: 75},
    {item:"pear", price: 60}
]
const convert=items.map(i=>{
    return {
        item:i.item,
        price:i.price*ind
    }
})
console.log(convert);
    
