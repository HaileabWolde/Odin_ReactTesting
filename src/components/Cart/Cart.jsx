import { useOutletContext } from 'react-router'
import { useState } from 'react'

import './cartComponent.css'
import Dialog from '../Dialog/Dialog'
import CardComponent from '../SingleItem/CardComponent'
const CartComponent = ()=> {
  
  const {cartItems, deleteFromCart, clearCart} = useOutletContext()

    const allSum =  Math.round(cartItems.reduce((accumlator, currentValue)=>{
                    const sum = currentValue.quantity * currentValue.price;
                    accumlator = accumlator + sum;
                    return accumlator
                }, 0))

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = ()=> {
        setIsModalOpen(true)
    }

    const closeModal = ()=> {
        setIsModalOpen(false)
    }
    return (
        <div className="cart">
          {
            /*
               <h1 className='text-[hsl(14,86%,42%)] font-extrabold text-2xl'>
                Your Cart ({cartItems.length})</h1>
            */
          }
           
                <ul className='flex gap-5 flex-col bg-[#fff] shadow-xl p-4 rounded-2xl'>
                      {
                cartItems.map((eachItem)=> {
                    return (
                     
          
                              <CardComponent
                                key={eachItem.id}
                                id={eachItem.id}
                                title={eachItem.title}
                                quantity={eachItem.quantity}
                                image={eachItem.image}
                                price={eachItem.price}
                                deleteFromCart={deleteFromCart}
                                 />
                      
                    )
                         
                })
            }
                </ul>
          {
         
              <div className='bg-[#fff] shadow-xl p-8 rounded-2xl flex flex-col gap-4  justify-center '>
                <span className='flex justify-around items-center'>
                     <h1 className='text-[hsl(7,20%,60%)] font-bold text-xl'>Order Total</h1>
                  <h1 className="text-[hsl(14,65%,9%)] font-black text-2xl">${allSum}</h1>
                </span>
             
                  <button 
            onClick={()=> {
              openModal()
            }}
            className='cursor-pointer w-4/4 py-3 px-3 rounded-3xl shadow-2xl bg-[hsl(14,86%,42%)] self-center text-[hsl(20,50%,98%)]'>
                <p className='font-bold'>Confirm Order</p>
          </button>
              </div>
          }

          {
            isModalOpen && 
            <Dialog
            isOpen={isModalOpen}
          isClose={closeModal}
          cartItems={cartItems}
          clearCart={clearCart}
            />

          }
          
          
        </div>
    )
}
export default CartComponent;
