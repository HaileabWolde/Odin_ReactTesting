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


 
 /*console.log(clothesapi)*/
 
 const outletContext = {
  cartItems, addToCart ,increaseQuanity,
  decreaseQuanity ,deleteFromCart  , clearCart,
  clothesapi
  
 }
  return (
   <>
      <Header
      />
     <div id='container'>
      {
        /*
         <ClothesStore 
    clothesapi={clothesapi}
    cartItems={cartItems}
     addToCart={addToCart}
    increaseQuanity={increaseQuanity}
    decreaseQuanity ={decreaseQuanity}
 
    />
        */
      }
    <Outlet context={outletContext}/>
   {
    /*
    < CartComponent
    cartItems={cartItems}
    deleteFromCart={deleteFromCart}
    clearCart={clearCart}
    />*/
   } 
    </div>
   </>
  
  );
};

export default App;