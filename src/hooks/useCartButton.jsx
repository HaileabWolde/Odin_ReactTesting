import { useState } from "react";
export default function useCartButton() {
 
    const [cartItems, setCartItems] = useState([])



    const addToCart = (clothe)=>[
      setCartItems((currentItems)=> {
      //find if the item exists in the cartArray

      const alreadyIncart = currentItems.find((cartItem)=> cartItem.id === clothe.id)

      //if it does then add only the quanity of the cart element
      if(alreadyIncart){
            return (
               currentItems.map((cartItem)=> cartItem.id === alreadyIncart.id ? 
                  {
                     ...cartItem,
                     quantity:  cartItem.quantity + 1
                  }
                : cartItem)
            )
      }

      // if not then add the item to the cart 
      return (
         [
            ...currentItems,
            {...clothe, quantity: 1}
         ]
      )
     })
    ]
    const increaseQuanity = (clotheId)=>{
       
      setCartItems((currentItems)=> 
         currentItems.map((item)=> 
            item.id === clotheId ? 
      {...item, quantity: item.quantity + 1} 
      : item))
         
             
    }
    const decreaseQuanity = (clotheId)=>{
      setCartItems((currentItems)=> currentItems.map((item)=> {
         item.id === clotheId ? {
            ...item, quantity: Math.max(0, item.quantity - 1)
         }: item
      }))
    }
    
   return {
    cartItems,
 addToCart,
 increaseQuanity,
 decreaseQuanity
   } 
}