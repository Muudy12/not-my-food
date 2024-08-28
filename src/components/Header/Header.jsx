import './Header.scss';
import {Link} from "react-router-dom";
import avaterIcon from  "../../assets/avater.png"
import NotMyFoodLogo from '../../assets/logo.png';

function Header() {
    return (
      <header className="header">
          <ul className="header__nav-items">
            <li className="header__nav-item">
              <Link to="/" className="header__link">
                <img src={NotMyFoodLogo} className="header__logo" />
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/" className="header__link">
               Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/fooder" className="header__link">
                <img className="header__avater" src={avaterIcon} alt="profile" />
              </Link>
            </li>
            <img />
          </ul>
      </header>
    );
  }

  export default Header;
