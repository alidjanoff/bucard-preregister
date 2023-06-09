// Router
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

const Notify = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <section className="notify">
      <div className="container">
        <div className="row">
          <div className="notifyInfo">
            <h2 className="title">
              {t("notify.title")} <br /> {t("notify.info")}
            </h2>
            <Link className="registerBtn" to="/register">
              {t("notify.btnValue")}
            </Link>
            <div className="pattern"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notify;
