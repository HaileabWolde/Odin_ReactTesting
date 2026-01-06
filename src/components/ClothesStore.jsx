import { useState } from 'react';
import '../css/clothesStore.css';
import { FaMinus, FaPlus  } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const ClothesStore = ({clothesapi})=>{

    const [cartButton, setCartButton] = useState(true);
    const [clotheQuantity, setClotheQuantity] = useState(0)
    const handleCartButton = ()=>{
        setCartButton(false);
    }
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
                              style={{
                               backgroundImage: `url(${clothes.image})`,
                                backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 }}
                            >
                                <button 
                                className={`cursor-pointer ${cartButton ? `cartButton` : `cartButtonWhite`} w-3/4 py-3 px-3 rounded-3xl shadow-2xl self-end  flex gap-2 items-center`}
                                onClick={handleCartButton}
                                >
                                    {
                                        cartButton ? 
                                        <>
                                         <span>Add to Cart </span>  <FaShoppingCart size={18}/>
                                        
                                        </>
                                        : 
                                      
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