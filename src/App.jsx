import './App.css'
import useCartButton from './hooks/useCartButton';
import ClothesStore from './components/ClothesStore/ClothesStore';
import CartComponent from './components/Cart/Cart';
import useCart from './hooks/useCart';
const App = () => {
  
  const {loading, error, clothesapi} = useCart();
    const {cartItems, addToCart,   increaseQuanity,
  decreaseQuanity, deleteFromCart} = useCartButton()

  if(loading){
  
    return (
      <h1>Loading</h1>
    )
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }


 
 console.log(clothesapi)
  return (
   
    <>
    <ClothesStore 
    clothesapi={clothesapi}
    cartItems={cartItems}
     addToCart={addToCart}
    increaseQuanity={increaseQuanity}
    decreaseQuanity ={decreaseQuanity}
 
    />
    < CartComponent
    cartItems={cartItems}
    deleteFromCart={deleteFromCart}
    />
    </>
  );
};

export default App;