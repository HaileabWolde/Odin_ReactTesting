import '../../css/clothesStore.css';
import { FaMinus, FaPlus  } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const ClothesStore = ({clothesapi,
    cartItems, addToCart,   increaseQuanity,
    decreaseQuanity,
   })=>{

  
  
  
    return (
        <div className="clothesStore">
                     {
                        clothesapi.map((
                            clothe

                        )=> {
                     return (
                            <div
                              data-testid="clothediv"
                            className="clothe"
                            key={clothe.id}
                            id={clothe.id}
                              style={{
                               backgroundImage: `url(${clothe.image})`,
                                backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 }}
                            >
                                <button 
                                className={`cursor-pointer ${cartItems.includes(clothe) ? `cartButtonWhite`: `cartButton`} w-3/4 py-3 px-3 rounded-3xl shadow-2xl self-end  flex gap-2 items-center`}
                                onClick={(e) => {
                                         e.stopPropagation(); // Prevent triggering parent if needed
                                      addToCart(clothe);
                                                          
              }}
                                >
                                    {
                                       cartItems.includes(clothe) ?
                                      

                                       <>
                                        <div className='border-white border-2 rounded-xl p-1'
                                         onClick={()=> {
                                                
                                          increaseQuanity(clothe)
                                            }}
                                        >
                                            <FaMinus 
                                           
                                         />
                                        </div>
                                        {
                                            clothe.quantity
                                        }
                                        
                                        <div className='border-white border-2 rounded-xl p-1'
                                          onClick={()=> {
                                               
                                         decreaseQuanity(clothe)
                                            }}
                                        >
                                            <FaPlus
                                           
                                            />
                                        </div>
                                        </> : 
                                              <>
                                         <span>Add to Cart </span>  <FaShoppingCart size={18}/>
                                        
                                        </>  
                                                                  
                                      
                                    }
                                   
                                    </button>
                                  
                            </div>
                          
                        )
                    })
                    }
        </div>
    )
}
export default ClothesStore;