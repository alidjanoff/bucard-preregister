// Images
import trendUp from "../assets/images/icons/trend-up.svg";
import trendUpWhite from "../assets/images/icons/trend-up-white.svg";

const ButtonsGroup = ({ state }) => {
  return (
    <div className="btnGroup">
      <button
        className={state.businessPlan ? "tabBtn" : "tabBtn active"}
        onClick={() => state.setBusinessPlan(false)}
      >
        Şəxsi
      </button>
      <button
        className={state.businessPlan ? "tabBtn active" : "tabBtn"}
        onClick={() => state.setBusinessPlan(true)}
      >
        <img
          src={state.businessPlan ? trendUpWhite : trendUp}
          alt="trend-up icon"
        />
        Biznes
      </button>
    </div>
  );
};

export default ButtonsGroup;
