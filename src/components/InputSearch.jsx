import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext';

function InputSearch() {

  const productsContext = useContext(ProductsContext);
  const { query, handleOnChange } = productsContext;


  return (
    <form className='flex gap-3 justify-center items-center bg-slate-600 h-12 w-4/5 ml-auto mr-auto -my-6 rounded-lg'>
        <div className='w-6 h-6 border rounded-full border-solid border-slate-500'></div>
        <input 
          className='outline-none bg-transparent text-white' 
          type="text" 
          placeholder="Buscar..." 
          value={query}
          onChange={handleOnChange}
        />
    </form>
  )
}

export default InputSearch