import { FaTimes } from 'react-icons/fa'
import useCartButton from '../../hooks/useCartButton';
const   CardComponent = ({id, title, quantity,
    price
})=>{
    const {deleteFromCart} = useCartButton()
return(
    <li>
         <h1 className="text-[hsl(14,65%,9%)] font-bold">{title}</h1>
         <div className="flex justify-between mb-2">
            <span className="flex gap-3 align-middle">
                <p className="text-[hsl(14,86%,42%)] font-bold">{quantity}x</p>
                <p className="text-[hsl(7,20%,60%)] font-bold">${price}</p>
            </span>
            <div
            onClick={(event)=>{
                event.preventDefault();
                deleteFromCart(id)

            }} 
            className='border-[hsl(14,25%,72%)] border-2 rounded-xl p-0.5 cursor-pointer font-bold' 
                                                  >
                                                      <FaTimes 
                                                      color='hsl(14,25%,72%)'
                                                     
                                                   />
                                                  </div>
         </div>
        <div className="border-1 border-solid border-[hsl(14,25%,72%)]"></div>

    </li>
) 
}
export default  CardComponent;