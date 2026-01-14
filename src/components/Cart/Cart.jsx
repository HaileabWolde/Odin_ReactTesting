import { useState } from 'react'
import './cartComponent.css'
import Dialog from '../Dialog/Dialog'
import CardComponent from '../SingleItem/CardComponent'
const CartComponent = ({cartItems, deleteFromCart,   clearCart})=> {
  
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
            <h1 className='text-[hsl(14,86%,42%)] font-extrabold text-2xl'>
                Your Cart ({cartItems.length})</h1>
                <ul className='flex gap-5 flex-col'>
                      {
                cartItems.map((eachItem)=> {
                    return (
                     
          
                              <CardComponent
                                key={eachItem.id}
                                id={eachItem.id}
                                title={eachItem.title}
                                quantity={eachItem.quantity}
                                price={eachItem.price}
                                deleteFromCart={deleteFromCart}
                                 />
                      
                    )
                         
                })
            }
                </ul>
          {
                cartItems.length > 0 && 
              <div className='flex justify-around items-center'>
                <p className='text-[hsl(7,20%,60%)] font-bold'>Order Total</p>
                  <h1 className="text-[hsl(14,65%,9%)] font-black text-2xl">${allSum}</h1>
              </div>
          }
          {
            cartItems.length > 0 && 
            <button 
            onClick={()=> {
              openModal()
            }}
            className='cursor-pointer w-3/4 py-3 px-3 rounded-3xl shadow-2xl bg-[hsl(14,86%,42%)] self-center text-[hsl(20,50%,98%)]'>
                <p className='font-bold'>Confirm Order</p>
          </button>
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
