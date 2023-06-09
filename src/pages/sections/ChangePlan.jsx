import { useState } from "react";

// Components
import ButtonsGroup from "../../components/ButtonsGroup";

// Translation
import { useTranslation } from "react-i18next";

const ChangePlan = () => {
  // Translation
  const { t } = useTranslation();

  // Local state
  const [businessPlan, setBusinessPlan] = useState(false);

  return (
    <section className="changePlan" id="whatIsBucard">
      <div className="row">
        <div className="leftSide">
          <h2 className="tabTitle">{t("changePlan.question")}</h2>
          <ButtonsGroup state={{ businessPlan, setBusinessPlan }} />
          <ul className={`tabList ${!businessPlan && "active"}`}>
            <li className="tabItem">{t("changePlan.personalInfo1")}</li>
            <li className="tabItem">{t("changePlan.personalInfo2")}</li>
            <li className="tabItem">{t("changePlan.personalInfo3")}</li>
            <li className="tabItem">{t("changePlan.personalInfo4")}</li>
            <li className="tabItem">{t("changePlan.personalInfo5")}</li>
          </ul>
          <ul className={`tabList ${businessPlan && "active"}`}>
            <li className="tabItem">{t("changePlan.businessInfo1")}</li>
            <li className="tabItem">{t("changePlan.businessInfo2")}</li>
            <li className="tabItem">{t("changePlan.businessInfo3")}</li>
            <li className="tabItem">{t("changePlan.businessInfo4")}</li>
            <li className="tabItem">{t("changePlan.businessInfo5")}</li>
          </ul>
        </div>
        <div className={`rightSide ${businessPlan && "active"}`}></div>
      </div>
    </section>
  );
};

export default ChangePlan;
