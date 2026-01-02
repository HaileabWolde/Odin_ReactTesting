 import { useState, useEffect } from "react";


 export default function  useCart() {
    const [clothesapi, setClothesapi] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function getFastApi(){
            try{
                const response = await fetch('https://fakestoreapi.com/products')

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const result = await response.json()

                setClothesapi(result);
                setError(null);
            }
            catch(err){
                setError(err.message);
                setClothesapi(null);
            }
            finally{
                setLoading(false);
            }
        }
        getFastApi()
    }, [])

   return {
    loading,
    error,
    clothesapi
   }

 }