import '../css/clothesStore.css'
import { FaShoppingCart } from 'react-icons/fa';

const ClothesStore = ({clothesapi})=>{
    return (
        <div className="clothesStore">
                     {
                        clothesapi.map((
                            clothes

                        )=> {
                     return (
                            <did 
                            className="clothe"
                              style={{
                               backgroundImage: `url(${clothes.image})`,
                                backgroundSize: 'cover',
                                 backgroundPosition: 'center',
                                 }}
                            >
                                <button 
                                className='cartButton cursor-pointer bg-white px-8 py-2 rounded-3xl shadow-2xl self-end border-2 flex gap-2 items-center'>
                                    <span>Add to Cart </span>  <FaShoppingCart size={18}/></button>
                                  
                            </did>
                          
                        )
                    })
                    }
        </div>
    )
}
export default ClothesStore;