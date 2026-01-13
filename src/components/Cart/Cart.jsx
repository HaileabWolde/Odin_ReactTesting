import './cartComponent.css'

const CartComponent = ({cartItems})=> {
  
  
    return (
        <div className="cart">
            <h1 className='text-[hsl(14,86%,42%)] font-extrabold text-2xl'>
                Your Cart ({cartItems.length})</h1>
        </div>
    )
}
export default CartComponent;
