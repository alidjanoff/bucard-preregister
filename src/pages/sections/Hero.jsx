// Router
import { Link } from "react-router-dom";

// Images
import googlePlay from "../../assets/images/icons/google-play.svg";
import appStore from "../../assets/images/icons/app-store.svg";
import banner from "../../assets/images/banner.png";

// Translation
import { useTranslation } from "react-i18next";

const Hero = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="row">
          <div className="homeHero">
            <div className="leftSide">
              <div className="homeContent">
                <h1 className="homeTitle">{t("hero.title")}</h1>
                <p className="homeInfo">{t("hero.info")}</p>
                <Link className="btn" to="/register">
                  {t("hero.btnValue1")} / <span>{t("hero.btnValue2")}</span>
                </Link>
              </div>
              <div className="preRegister">
                <p className="appInfo">
                  {t("hero.googlePlay")} <br /> {t("hero.appStore")}
                </p>
                <div className="downloadApp">
                  <div className="mobileApp">
                    <Link to="https://play.google.com/" target="_blank">
                      <img src={googlePlay} alt="download-google-play" />
                    </Link>
                  </div>
                  <div className="mobileApp">
                    <Link to="https://www.apple.com/app-store/" target="_blank">
                      <img src={appStore} alt="download-app-store" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <img src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
