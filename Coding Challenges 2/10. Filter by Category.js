function filterProductsByCategory(produc) 
{
    return function(category) 
    {
      return produc.filter(product => product.category === category);
    };
  }
  const products = [
    { name: "Shirt", category: "clothing" },
    { name: "pants", category: "clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "sunglasses", category: "Accessories" },
  ];
  
  
  const clothingproduct = filterProductsByCategory(products)("clothing");
  

  
  console.log(clothingproduct);