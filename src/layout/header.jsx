import './header.css'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Product</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>

        </ul>

    )
}
export default Header;