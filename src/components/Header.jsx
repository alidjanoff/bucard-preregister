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

  // Scroll to clicked section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo" onClick={() => scrollToSection("hero")}>
            <Link to="/">
              <img src={logo} alt="bucard-logo" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li
                className="navItem"
                onClick={() => scrollToSection("whatIsBucard")}
              >
                {t("header.whatIs")}
              </li>
              <li
                className="navItem"
                onClick={() => scrollToSection("bucardPackets")}
              >
                {t("header.packets")}
              </li>
              <li
                className="navItem"
                onClick={() => scrollToSection("contacts")}
              >
                {t("header.contact")}
              </li>
              <LanguageSelector />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
