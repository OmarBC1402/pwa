import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
        const[data, setData] = useState([]);
        const[cart, setCart] = useState([]);
        const [searchResults, setSearchResults] = useState([]); 

        useEffect(()=>{
            axios("data.json").then((res)=> setData(res.data));
        },[])

        const buyProducts=(product) => {
            const productrepeat = cart.find((item) => item.id === product.id);
      
            if(productrepeat){
              setCart(cart.map((item)=>item.id === product.id ? {...product, quanty: 
                productrepeat.quanty + 1 } : item))
            }else{
              setCart([...cart, product])
            } 
      
          }
          const searchProducts = (query) => {
            const results = data.filter((product) =>
              product.categoria.toLowerCase().includes(query.toLowerCase())
            );
          
            setSearchResults(results);
          };

    return(
        <dataContext.Provider value={{data, cart, setCart, buyProducts, searchResults, searchProducts, setSearchResults}}>{children}</dataContext.Provider>
    )
};

export default DataProvider;