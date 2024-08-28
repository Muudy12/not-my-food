import './Header.scss';
import { Link } from "react-router-dom";
import avaterIcon from "../../assets/avater.png";
import logo2 from '../../assets/not-my-food-high-resolution-logo-transparent.png';

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__link header__logo-link">
                    <img src={logo2} className="header__logo" alt="Not My Food Logo" />
                </Link>
                <div className='header__container'>
                <Link to="/" className="header__link header__home-link">
                    <h3>Choices</h3>
                </Link>
                <Link to="/fooder" className="header__link header__home-link">
                    <h3>Preferences</h3>
                </Link>
                <Link to="/fooder" className="header__link header__profile-link">
                    <img className="header__avatar" src={avaterIcon} alt="Profile" />
                </Link>
                </div>


            </nav>
        </header>
    );
}

export default Header;
