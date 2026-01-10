import './App.css'
import useCartButton from './hooks/useCartButton';
import ClothesStore from './components/ClothesStore/ClothesStore';
import CartComponent from './components/Cart/Cart';
import useCart from './hooks/useCart';
const App = () => {
  
  const {loading, error, clothesapi} = useCart();
    const {clotheQuantity, cartItems, handleAddToCart} = useCartButton()

  if(loading){
  
    return (
      <h1>Loading</h1>
    )
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

 
  return (
   
    <>
    <ClothesStore 
    clothesapi={clothesapi}
    clotheQuantity={clotheQuantity}
    cartItems={cartItems}
    handleAddToCart={handleAddToCart}
    />
    < CartComponent
    cartItems={cartItems}
    />
    </>
  );
};

export default App;