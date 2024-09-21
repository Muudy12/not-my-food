import "./Header.scss";
import { Link } from "react-router-dom";
import avaterIcon from "../../assets/avater.png";
import logo2 from "../../assets/not-my-food-high-resolution-logo-transparent.png";
import MuPort from "../../assets/mu-port.png";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="logos-container">
          <Link className="mu-port" to="https://muport.netlify.app/">
            <img src={MuPort} alt="Mu Port Logo" />
          </Link>
          <Link to="/" className="header__link header__logo-link">
            <img src={logo2} className="header__logo" alt="Not My Food Logo" />
          </Link>
        </div>
        <div className="header__container">
          <Link to="/" className="header__link header__home-link">
            <h3>Choices</h3>
          </Link>
          <Link to="/preferences" className="header__link header__home-link">
            <h3>Preferences</h3>
          </Link>
          <Link to="/preferences" className="header__link header__profile-link">
            <img className="header__avatar" src={avaterIcon} alt="Profile" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
