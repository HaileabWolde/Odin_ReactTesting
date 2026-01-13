import './cartComponent.css'
import CardComponent from '../SingleItem/cardComponent'
const CartComponent = ({cartItems, deleteFromCart})=> {
  
  
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
          
        </div>
    )
}
export default CartComponent;
