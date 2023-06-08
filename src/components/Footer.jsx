// Router
import { Link } from "react-router-dom";

// Images
import logo from "../assets/images/logo.svg";

// Icons
import fbIcon from "../assets/images/icons/fbIcon.svg";
import inIcon from "../assets/images/icons/inIcon.svg";
import twIcon from "../assets/images/icons/twIcon.svg";

// Translation
import { useTranslation } from "react-i18next";

const Footer = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="siteInfo">
            <div className="footerLogo">
              <Link to="/">
                <img src={logo} alt="bucard-logo" />
              </Link>
            </div>
            <p>
              © {t("footer.copyrights")} • {new Date().getFullYear()} Bucard.az
            </p>
          </div>
          <div className="contactInfo">
            <Link to="tel:+994506707504">+994 50 670 75 04</Link>
            <Link to="mailto:contact@bucard.az">contact@bucard.az</Link>
          </div>
          <ul className="socials">
            <li className="socialItem">
              <Link to="https://www.facebook.com/bucard.az" target="_blank">
                <img src={fbIcon} alt="facebook-icon" />
              </Link>
            </li>
            <li className="socialItem">
              <Link
                to="https://www.linkedin.com/company/bucard/"
                target="_blank"
              >
                <img src={inIcon} alt="linkedin-icon" />
              </Link>
            </li>
            <li className="socialItem">
              <Link to="https://www.twitter.com/bucard.az/" target="_blank">
                <img src={twIcon} alt="twitter-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
