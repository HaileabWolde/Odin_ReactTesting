import '../css/clothesStore.css'


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
                                <button className='cursor-pointer bg-white px-8 py-4 rounded-lg shadow-2xl self-end '>Add to Cart</button>
                                  
                            </did>
                          
                        )
                    })
                    }
        </div>
    )
}
export default ClothesStore;