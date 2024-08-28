import './Header.scss';
import {Link} from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <h2 className="header__title">Movies</h2>
        <nav className="header__nav">
          <ul className="header__nav-items">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/top-rated" className="header__nav-link"></Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;