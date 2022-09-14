import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const Header = () => {

  const productContext = useContext(ProductsContext);
  const { qty } = productContext;

  return (
    <header className='w-screen h-28 bg-lime-500 p-6'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-semibold text-white tracking-widest'>Productos</h1>
            <button className="text-white relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <div className="relative rounded-full -top-10 -right-3 bg-red-500">
                <span className="text-sm font-semibold">{qty}</span>
              </div>
            </button>
        </div>
        
    </header>
  )
}

export default Header