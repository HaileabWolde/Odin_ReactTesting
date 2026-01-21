import { Link } from 'react-router';
import './Header.css';
import { FaShoppingCart, FaHome } from 'react-icons/fa';

const Header = ({ cartItems }) => {
  const itemCount = cartItems?.length || 0;

  return (
    <div className="header">
      <Link to="/" className="cursor-pointer">
        <FaHome size={32} color="hsl(14,65%,9%)" />
      </Link>

      <Link to="/cart" className="cursor-pointer">
        <div className="relative ">
          <FaShoppingCart size={32} color="hsl(14,65%,9%)" />

          {itemCount > 0 && (
            <span className="cart-badge">
              {itemCount}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Header;