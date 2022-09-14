import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

function Product({product}) {

  const productContext = useContext(ProductsContext);
  const { addProductToCart } = productContext;

  return (
    <article className="p-3 border-t first:pt-3 last:pb-3">
      <div>
          <span className="inline-flex items-center justify-center p-5 bg-indigo-500 rounded-md shadow-lg">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
          </span>
      </div>
      <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">{product.name}</h3>
      <h3 className="text-slate-900 dark:text-white text-base tracking-tight">{product.category}</h3>
      <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-slate-900 dark:text-white text-base tracking-tight">
          Precio $ {product.price} ({product.unit})
        </span>
        <button 
          className="flex justify-between items-center bg-lime-500 rounded-lg p-2 pr-3 text-white text-base font-medium tracking-tight"
          onClick={() => {addProductToCart(product);}}  
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Añadir</span>
        </button>
      </div>
    </article>
  )
}

export default Product