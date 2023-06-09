import { useEffect, useState } from "react";

// Translation
import { useTranslation } from "react-i18next";

const PacketCard = ({ data, state }) => {
  // Translation
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  // Local state
  const [anuallyPrice, setAnuallyPrice] = useState(0);

  // Calculate anually discount
  useEffect(() => {
    let anually = (data.price * 12).toFixed(2);
    let discountedPrice = (anually * data.percent) / 100;
    let total = anually - discountedPrice;
    setAnuallyPrice(Number(total.toFixed(2)));
  }, [data]);

  return (
    <div className="packetCard">
      <h4 className="cardTitle">
        {lng === "az"
          ? data.titleAz
          : lng === "en"
          ? data.titleEn
          : lng === "ru"
          ? data.titleRu
          : null}
      </h4>
      <p className="cardPrice">
        {state ? anuallyPrice : data.price} AZN
        <span className="perMonth">
          {state ? t("packetCard.everyYear") : t("packetCard.everyMonth")}
        </span>
      </p>
      {data.discount ? (
        state && (
          <p className="packetDiscount">
            {t("packetCard.yearly")}
            <span className="annually">
              {data.percent}% {t("packetCard.discount")}
            </span>
          </p>
        )
      ) : (
        <p className="packetDiscount">{t("packetCard.freePlan")}</p>
      )}
      <span className="division"></span>
      <ul className="featureList">
        {lng === "az"
          ? data.detailsAz.map((item) => (
              <li className="listItem" key={item.id}>
                {item.detail}
              </li>
            ))
          : lng === "en"
          ? data.detailsEn.map((item) => (
              <li className="listItem" key={item.id}>
                {item.detail}
              </li>
            ))
          : lng === "ru"
          ? data.detailsRu.map((item) => (
              <li className="listItem" key={item.id}>
                {item.detail}
              </li>
            ))
          : null}
      </ul>
      <button className="cardBtn"> {t("packetCard.btnValue")}</button>
    </div>
  );
};

export default PacketCard;
