// Images
import trendUp from "../assets/images/icons/trend-up.svg";
import trendUpWhite from "../assets/images/icons/trend-up-white.svg";

// Translation
import { useTranslation } from "react-i18next";

const ButtonsGroup = ({ state }) => {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="btnGroup">
      <button
        className={state.businessPlan ? "tabBtn" : "tabBtn active"}
        onClick={() => state.setBusinessPlan(false)}
      >
        {t("changePlan.personalBtnValue")}
      </button>
      <button
        className={state.businessPlan ? "tabBtn active" : "tabBtn"}
        onClick={() => state.setBusinessPlan(true)}
      >
        <img
          src={state.businessPlan ? trendUpWhite : trendUp}
          alt="trend-up icon"
        />
        {t("changePlan.businessBtnValue")}
      </button>
    </div>
  );
};

export default ButtonsGroup;
