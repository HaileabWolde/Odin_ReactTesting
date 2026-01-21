import './App.css'
import useCartButton from './hooks/useCartButton';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import useCart from './hooks/useCart';
const App = () => {
  
  const {loading, error, clothesapi} = useCart();
    const {cartItems, addToCart,   increaseQuanity,
  decreaseQuanity, deleteFromCart,  clearCart} = useCartButton()

  if(loading){
  
    return (
      <h1>Loading</h1>
    )
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }


 
 console.log(clothesapi)
 
 const outletContext = {
  cartItems, addToCart ,increaseQuanity,
  decreaseQuanity ,deleteFromCart  , clearCart,
  clothesapi
  
 }
  return (
   <>
      <Header
      cartItems={cartItems}
      />
     <div id='container'>
     
    <Outlet context={outletContext}/>
  
    </div>
   </>
  
  );
};

export default App;