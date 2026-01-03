import './App.css'
import cartComponent from './components/Cart';
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

 console.log(clothesapi)

  return (
   
    <>
    {
      clothesapi.map((clothes)=> {
        return (
          <img src={clothes.image}/>
        )
      })
    }
    <cartComponent/>
    </>
  );
};

export default App;