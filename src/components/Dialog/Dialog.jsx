import { useRef, useEffect } from 'react';
import './Dialog.css'
import CardComponent from '../SingleItem/CardComponent';
const Dialog = ({  isOpen, isClose, cartItems,  clearCart})=>{


    const dialogRef = useRef(null)

    useEffect(()=>{

        const dialog = dialogRef.current
        if(!dialog)
            return
        if(isOpen){
            dialog.showModal()
        }
        else{
            dialog.close()
        }
        
           // Cleanup function to remove event listener when component unmounts or isOpen changes
    return () => {
      // Ensure the reference is still valid during cleanup
      if (dialog) {
        // The 'close' event is triggered when the dialog is dismissed (e.g., via Esc key)
        dialog.removeEventListener('close', isClose);
      }
    };
    }, [isOpen, isClose])
    return (
        <dialog ref={dialogRef}>
            <h1
            className='text-[hsl(14,65%,9%)] font-black text-2xl self-start'>Order Confirmed </h1>
             <ul className='flex gap-5 flex-col bg-[hsl(20,50%,98%)] shadow-1xl p-8 rounded-2xl'>
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
                                 />
                      
                    )
                         
                })
            }
                </ul>
             <button 
          onClick={()=>{
            clearCart()
            isClose()
            
          }} 
            className='cursor-pointer w-3/4 py-3 px-3 rounded-3xl shadow-2xl bg-[hsl(14,86%,42%)] self-center text-[hsl(20,50%,98%)]'>
                <p className='font-bold'>Start New Order</p>
          </button>
        </dialog>
    )
}
export default Dialog;