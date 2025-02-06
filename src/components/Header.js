import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => (
  <header>
    <Link to="/">Home</Link>
    <span>Cart ({cartCount})</span>
  </header>
);

export default Header;