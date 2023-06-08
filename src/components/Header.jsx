// Router
import { Link } from "react-router-dom";

// Images
import logo from "../assets/images/logo.svg";

// Translation
import { useTranslation } from "react-i18next";

// Components
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="bucard-logo" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">{t("header.whatIs")}</li>
              <li className="navItem">{t("header.packets")}</li>
              <li className="navItem">{t("header.contact")}</li>
              <LanguageSelector />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
