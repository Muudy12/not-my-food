import './Header.scss';
import { Link } from "react-router-dom";
import avaterIcon from "../../assets/avater.png";
import NotMyFoodLogo from '../../assets/logo.png';
import logo from '../../assets/not-my-food.png';
import logo2 from '../../assets/not-my-food-high-resolution-logo-transparent.png';
import logo3 from '../../assets/not-my-food-3.png';

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__link header__logo-link">
                    <img src={NotMyFoodLogo} className="header__logo" alt="Not My Food Logo" />
                    <img src={logo} className="header__logo" alt="Not My Food Logo" />
                    <img src={logo2} className="header__logo" alt="Not My Food Logo" />
                    <img src={logo3} className="header__logo" alt="Not My Food Logo" />
                </Link>
                <Link to="/" className="header__link header__home-link">
                    <h2>Home</h2>
                </Link>
                <Link to="/fooder" className="header__link header__profile-link">
                    <img className="header__avatar" src={avaterIcon} alt="Profile" />
                </Link>
            </nav>
        </header>
    );
}

export default Header;
