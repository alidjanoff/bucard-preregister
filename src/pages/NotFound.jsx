// Router
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

const NotFound = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <main>
      <section className="notFound">
        <h3 className="infoText">{t("notFound.title")}</h3>
        <Link to="/">{t("notFound.goBack")}</Link>
      </section>
    </main>
  );
};

export default NotFound;
