import './App.css'
import ClothesStore from './components/ClothesStore';
import CartComponent from './components/Cart';
import useCart from './hooks/useCart';
const App = () => {
  
  const {loading, error, clothesapi} = useCart();


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
    <ClothesStore clothesapi={clothesapi}/>
    < CartComponent/>
    </>
  );
};

export default App;