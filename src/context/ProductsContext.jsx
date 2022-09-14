import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

function ProductsProvider(props) {

    const [qty, setQty] = useState(0);
    const [productsCart, setProductsCart] = useState([]);

    const addProductToCart = (product) =>{
      if(productsCart.some(el => el.id === product.id)){
        console.warn('el producto ya está en el carrito');
        const newCart = productsCart.map( prod => {
          if(prod.id === product.id){
            prod.qty = prod.qty + 1;
          }
          return prod;
        });
        setProductsCart(newCart);
      
      }else{
        console.log('El producto no está en el carrito');
        product.qty = 1;
        setProductsCart([...productsCart,product]);
      }
      setQty(qty + 1);
   }    

  return (
    <ProductsContext.Provider
      value={{
          /*Acá estará toda la info que yo quiero compartir en mi context*/
          productsCart,
          addProductToCart,
          qty          
      }}
    >

      {props.children}

    </ProductsContext.Provider>
  )
};

export default ProductsProvider;