import './Header.css'
import { FaShoppingCart, FaHome } from 'react-icons/fa';
const Header = ()=>{
    return (
        <div className='header'>
            <FaHome size={32} color='hsl(14,65%,9%)'/>
            <FaShoppingCart size={32} color='hsl(14,65%,9%)'/>
        </div>
    )
}
export default Header;