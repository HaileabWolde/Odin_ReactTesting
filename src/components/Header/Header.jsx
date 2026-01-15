import { Link } from 'react-router';
import './Header.css'
import { FaShoppingCart, FaHome } from 'react-icons/fa';
const Header = ()=>{
    return (
        <div className='header'>
            <Link
            to={`/`}
            className='cursor-pointer'
            >
                 <FaHome size={32} color='hsl(14,65%,9%)'/>
            </Link>
           
            <Link
            to={`/cart`}
            className='cursor-pointer'
        

            >
            <FaShoppingCart size={32} color='hsl(14,65%,9%)'/>
            </Link>
            
        </div>
    )
}
export default Header;