import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <ul>
            <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>

        </ul>

    )
}
export default Header;