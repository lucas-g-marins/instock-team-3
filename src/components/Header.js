import Logo from "../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navigation">
      <div className="navigation-header">
        <img src={Logo} alt="instock logo"></img>
        <div className="navigation-header__container">
          {/* TO BE REPLACED WITH LINK TO */}
          <a className="navigation-header__link" href="#">
            Warehouses
          </a>
          <a className="navigation-header__link" href="#">
            Inventory
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
