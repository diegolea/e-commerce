import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

function ProductsProvider(props) {

    const [productsCart, setProductsCart] = useState([]);

    const addProductToCart = (product) =>{
      console.log('Context ' + product.name);
      setProductsCart([...productsCart,product]);
      //productsCart.map(prod => console.log(prod));
   }
    

  return (
    <ProductsContext.Provider
      value={{
          /*Acá estará toda la info que yo quiero compartir en mi context*/
          productsCart,
          addProductToCart            
      }}
    >

      {props.children}

    </ProductsContext.Provider>
  )
};

export default ProductsProvider;