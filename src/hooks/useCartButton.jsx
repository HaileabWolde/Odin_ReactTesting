import { useState } from "react";
export default function useCartButton() {
   const [clotheQuantity, setClotheQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const handleAddToCart = (clothes)=>{
         let singleCartItem = cartItems.find((item)=> item === clothes)
          if(!singleCartItem){
                 {
                             setCartItems(
                                 (prev)=> [
                                ...prev,
                             clothes
                                ]

                            )
                }
          }
             
                   
      
    }
   return {
    clotheQuantity,
    cartItems,
    handleAddToCart
   } 
}