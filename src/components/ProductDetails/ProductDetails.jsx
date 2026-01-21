import useFetchItem from "../../hooks/fecthItem";
import '../ClothesStore/clothesStore.css';
import { useOutletContext } from "react-router";
import { FaMinus, FaPlus, FaShoppingCart  } from 'react-icons/fa';

const ProductDetails = ()=>{

    const {loading, error, itemAPI} = useFetchItem();
   const {addToCart, increaseQuanity, decreaseQuanity, cartItems} = useOutletContext()

 
    if(loading){
        return (
            <h1>Loading</h1>
        )
    }
   if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

    const itemQuantity = cartItems.find((item)=> item.id === itemAPI.id)

    return (
      <div className="w-full mx-auto p-6 flex justify-around gap-4">
        <img
        src={itemAPI.image}
         className='w-[20rem]'
        />
        <div className="flex flex-col justify-center gap-8 ">
           <h1 className="text-[hsl(14,65%,9%)] font-bold text-3xl">{itemAPI.title}</h1>
            <p className="text-[hsl(7,20%,60%)] font-bold">{itemAPI.description}</p>
              <p className="ext-[hsl(14,65%,9%)] font-bold text-4xl font-black">${itemAPI.price}</p>
              <div className="flex justify-around">
                 <button
              className={`cursor-pointer cartButtonWhite w-1/4 py-3 px-3 rounded-3xl shadow-2xl   flex gap-2 items-center`}
                onClick={(e) => {
                                    e.preventDefault()
                                         e.stopPropagation(); // Prevent triggering parent if needed
                                      addToCart(itemAPI);
                                                          
              }}
              >
                <div className='border-white border-2 rounded-xl p-1 cursor-pointer'
                                                                 onClick={(event)=> {
                                                              event.preventDefault()
                                                           event.stopPropagation()    
                                                         decreaseQuanity(itemAPI.id)
                                                            }}
                                                        >
                                                            <FaMinus 
                                                           
                                                         />
                                                        </div>
                                                         {
                                            itemQuantity?.quantity
                                        }
                                          <div className='border-white border-2 rounded-xl p-1'
                                                                                   onClick={(event)=> {
                                                                                    event.preventDefault()
                                                                                    event.stopPropagation();
                                                                                  increaseQuanity(itemAPI.id)
                                                                                    }}
                                                                                 
                                                                                >
                                                                                    <FaPlus
                                                                                   
                                                                                    />
                                                                                </div>
                
              </button>
              <button 
              className="cursor-pointer cartButton rounded-3xl shadow-2xl flex gap-2 items-center w-1/4"
               onClick={(e) => {
                                    e.preventDefault()
                                         e.stopPropagation(); // Prevent triggering parent if needed
                                      addToCart(itemAPI);
                                                          
              }}
              >
                   <span>Add to Cart </span>  <FaShoppingCart size={18}/>
                </button>
              </div>
             
        </div>
      </div>
    )
}
export default ProductDetails;