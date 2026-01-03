import '../css/clothesStore.css'


const ClothesStore = ({clothesapi})=>{
    return (
        <div className="clothesStore">
                     {
                        clothesapi.map((clothes)=> {
                     return (
                          <img src={clothes.image}/>
                        )
                    })
                    }
        </div>
    )
}
export default ClothesStore;