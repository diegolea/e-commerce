import React, { useState } from 'react'

import ProductSearchList from './ProductSearchList';

function ProductContainer() {

  const [query, setQuery] = useState('');

  const handleOnChange = (e) =>{
    //console.log(e.target.value);
    setQuery(e.target.value);
  }

  return (
    <div>
        <div className='flex gap-3 items-center bg-slate-600 h-12 w-4/5 ml-auto mr-auto -my-6 rounded-lg pl-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input 
            className='outline-none bg-transparent text-white' 
            type="text" 
            placeholder="Buscar..." 
            value={query}
            onChange={handleOnChange}
          />
        </div>
        <ProductSearchList query={query} />
    </div>
  )
}

export default ProductContainer