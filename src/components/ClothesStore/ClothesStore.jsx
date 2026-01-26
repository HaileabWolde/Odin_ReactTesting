import { Link } from 'react-router';
import { useOutletContext } from "react-router";
import './clothesStore.css';
import { FaMinus, FaPlus  } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const ClothesStore = ()=>{

  
  const {clothesapi, cartItems, addToCart, increaseQuanity, decreaseQuanity} = useOutletContext()
  
    return (
        <div className="flex flex-col md:flex-row  justify-center items-center gap-18 flex-wrap w-full">
                     {
                        clothesapi.map((
                            clothe

                        )=> {
                            let clotheItem = cartItems?.find((item)=> item.id === clothe.id)
                            let  quantity = clotheItem?.quantity || 0
                     return (
                        <Link
                        to={`/clothe/${clothe.id}`}
                         data-testid="clothediv"
                            className=" flex justify-center w-full md:w-[45%] lg:w-[28%] min-h-[550px] md:min-h-[450px]"
                            key={clothe.id}
                            id={clothe.id}
                              style={{
                               backgroundImage: `url(${clothe.image})`,
                                backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 }}
                        >
                            
                                <button 
                                className={`cursor-pointer ${quantity  ? `cartButtonWhite`: `cartButton`} w-3/4 py-3 px-3 rounded-3xl shadow-2xl self-end  flex gap-2 items-center`}
                                onClick={(e) => {
                                    e.preventDefault()
                                         e.stopPropagation(); // Prevent triggering parent if needed
                                      addToCart(clothe);
                                                          
              }}
                                >
                                    {
                                     quantity ?
                                      

                                       <>
                                        <div className='border-white border-2 rounded-xl p-1 cursor-pointer'
                                                 onClick={(event)=> {
                                              event.preventDefault()
                                           event.stopPropagation()    
                                         decreaseQuanity(clothe.id)
                                            }}
                                        >
                                            <FaMinus 
                                           
                                         />
                                        </div>
                                        {
                                             quantity
                                        }
                                        
                                        <div className='border-white border-2 rounded-xl p-1'
                                           onClick={(event)=> {
                                            event.preventDefault()
                                            event.stopPropagation();
                                          increaseQuanity(clothe.id)
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
                                  
                         
                        </Link>
                           
                          
                        )
                    })
                    }
        </div>
    )
}
export default ClothesStore;