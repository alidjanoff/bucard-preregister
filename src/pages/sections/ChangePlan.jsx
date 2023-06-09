import { useState } from "react";

// Components
import ButtonsGroup from "../../components/ButtonsGroup";

const ChangePlan = () => {
  const [businessPlan, setBusinessPlan] = useState(false);

  return (
    <section className="changePlan" id="whatIsBucard">
      <div className="row">
        <div className="leftSide">
          <h2 className="tabTitle">Bucard nədir?</h2>
          <ButtonsGroup state={{ businessPlan, setBusinessPlan }} />
          <ul className={`tabList ${!businessPlan && "active"}`}>
            <li className="tabItem">Məkan və peşəyə görə axtarış imkanı</li>
            <li className="tabItem">
              Şirkətlər və fərdi şəxslərlə tanışlıq (Netvörkinq)
            </li>
            <li className="tabItem">
              Freelance və ya outsource iş tapmaq imkanı
            </li>
            <li className="tabItem">Rahat və sadə kommunikasiya</li>
            <li className="tabItem">
              Bütün məlumatlarının 1 platformadan paylaşılması
            </li>
          </ul>
          <ul className={`tabList ${businessPlan && "active"}`}>
            <li className="tabItem">Biznesinizin tanıtımı</li>
            <li className="tabItem">
              Keyvördlər, ərazi və reytinq əsasında əməkdaş axtarışı
            </li>
            <li className="tabItem">Biznes partnyorluğun inkişafı</li>
            <li className="tabItem">Filial şəbəkələrinin yerləşdirilməsi</li>
            <li className="tabItem">Asan və sürətli kommunikasiya</li>
          </ul>
        </div>
        <div className={`rightSide ${businessPlan && "active"}`}></div>
      </div>
    </section>
  );
};

export default ChangePlan;
