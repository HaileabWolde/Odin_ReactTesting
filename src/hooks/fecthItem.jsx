import { useState, useEffect } from "react";
import { useParams } from 'react-router';
export default function useFetchItem(){
  const { clotheId } = useParams();
    const [loading, setIsLoading] = useState(true);
const [error, setError] = useState(true);
const [itemAPI, setitemAPI] = useState(null)

useEffect(()=>{
    async function getSingleApi(){
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${clotheId}`)
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            setitemAPI(result)
            setError(null)
        }
        catch(err){
            setError(err.message)
            setitemAPI(null)
        }
        finally{
            setIsLoading(false)
        }
    }
    getSingleApi()

}, [clotheId])
return {
    loading, 
    error,
    itemAPI
}
}
