import { useEffect, useState } from "react";

// Router
import { Link, useNavigate } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

const RegisterInfoPage = () => {
  // Translation
  const { t } = useTranslation();

  //   Router
  const navigate = useNavigate();

  // Local states
  const [count, setCount] = useState(15);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/");
    }
  }, [count, navigate]);

  return (
    <main>
      <section className="registerInfoPage">
        <h3 className="infoText">{t("registerInfo.title")}</h3>
        <p className="request">{t("registerInfo.thanks")}</p>
        <p className="request">
          {t("registerInfo.you")} <span className="timer">{count}</span>{" "}
          {t("registerInfo.redirect")}
        </p>
        <Link to="/">{t("registerInfo.goBack")}</Link>
      </section>
    </main>
  );
};

export default RegisterInfoPage;
