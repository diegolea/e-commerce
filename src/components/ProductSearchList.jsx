import React, { useState, useEffect, useContext } from 'react';
import Product from './Product';

function ProductSearchList( { query }) {

    //const URLbase = 'https://api.mercadolibre.com/sites/MLA'  
    const [data, setData] = useState([]);  

    const getFromAPI = async () => {
        try {
            /*
            const result = await fetch(`${URLbase}/search?q=${query}`) //alt + 96
            const resultObj = await result.json();
            setData(resultObj.results);
            */
            const arrayProducts = 
                [
                    {
                        "id":1,
                        "name" : "Tomate Perita",
                        "category" : "Verdura",
                        "description": "Descripción de Tomate Perita rojo",
                        "price": 55,
                        "unit" : "KG"
                        
                    },
                    {
                        "id":2,
                        "name" : "Lechuga Manteca",
                        "category" : "Verdura",
                        "description": "Descripción de Lechuga Manteca",
                        "price": 35,
                        "unit" : "KG"
                    },
                    {
                        "id":3,
                        "name" : "Lechuga Crespa",
                        "category" : "Verdura",
                        "description": "Descripción de Lechuga Crespa",
                        "price": 22,
                        "unit" : "UNI"
                    },
                    {
                        "id":4,
                        "name" : "Perejíl",
                        "category" : "Verdura",
                        "description": "Descripción de Perejíl",
                        "price": 30,
                        "unit" : "UNI"
                    },
                    {
                        "id":5,
                        "name" : "Tomate Americano",
                        "category" : "Verdura",
                        "description": "Descripción de Tomate Americano amarillo",
                        "price": 80,
                        "unit" : "KG"
                        
                    },
                    {
                        "id":6,
                        "name" : "Banana Ecuatoriana",
                        "category" : "Fruta",
                        "description": "Descripción de Banana Ecuatoriana",
                        "price": 95,
                        "unit" : "KG"
                        
                    }
                ];
            
            let arrayFilter = [];
            if (query.length > 0) {
                arrayFilter = arrayProducts.filter(element => element.description.toUpperCase().match(query.toUpperCase()));
            }
            setData(arrayFilter);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() =>{
        getFromAPI();
    },[query])

  return (
    <div className="m-8 bg-white dark:bg-slate-900 rounded-lg px-6 ring-1 ring-slate-900/5 shadow-xl">
        {
            data.length > 0 ?
            (
                data.map( product => <Product key={product.id} product={product} /> )
            )
            : <p>No existen resultados...</p>
        }
    </div>
  )
}
   /*<section className='mt-7 flex flex-col gap-1px rounded-lg overflow-hidden w-4/5 ml-auto mr-auto'>
        {
            data.length > 0 ?
            (
                data.map( product => <Product key={product.id} product={product} /> )
            )
            : <p>No existen resultados...</p>
        }
    </section>*/
export default ProductSearchList