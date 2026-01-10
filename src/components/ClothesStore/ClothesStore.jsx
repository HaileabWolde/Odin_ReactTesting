import '../../css/clothesStore.css';
import { FaMinus, FaPlus  } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const ClothesStore = ({clothesapi, clotheQuantity,cartItems, handleAddToCart})=>{

  
  
  
    return (
        <div className="clothesStore">
                     {
                        clothesapi.map((
                            clothes

                        )=> {
                     return (
                            <div
                              data-testid="clothediv"
                            className="clothe"
                            key={clothes.id}
                            id={clothes.id}
                              style={{
                               backgroundImage: `url(${clothes.image})`,
                                backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 }}
                            >
                                <button 
                                className={`cursor-pointer ${cartItems.includes(clothes) ? `cartButtonWhite`: `cartButton`} w-3/4 py-3 px-3 rounded-3xl shadow-2xl self-end  flex gap-2 items-center`}
                                onClick={(e) => {
                                         e.stopPropagation(); // Prevent triggering parent if needed
                                        handleAddToCart(clothes);
                                                          
              }}
                                >
                                    {
                                       cartItems.includes(clothes) ?

                                       <>
                                        <div className='border-white border-2 rounded-xl p-1'>
                                            <FaMinus/>
                                        </div>
                                        {
                                            clotheQuantity
                                        }
                                        <div className='border-white border-2 rounded-xl p-1'>
                                            <FaPlus/>
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