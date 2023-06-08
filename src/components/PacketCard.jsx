import { useEffect, useState } from "react";

const PacketCard = ({ data, state }) => {
  const [anuallyPrice, setAnuallyPrice] = useState(0);

  useEffect(() => {
    let anually = (data.price * 12).toFixed(2);
    let discountedPrice = (anually * data.percent) / 100;
    let total = anually - discountedPrice;
    setAnuallyPrice(Number(total.toFixed(2)));
  }, [data]);

  return (
    <div className="packetCard">
      <h4 className="cardTitle">{data.title}</h4>
      <p className="cardPrice">
        {state ? anuallyPrice : data.price} AZN
        <span className="perMonth">{state ? "hər il" : "hər ay"}</span>
      </p>
      {data.discount ? (
        state && (
          <p className="packetDiscount">
            İllik ödənişdə
            <span className="annually">{data.percent}% endirim</span>
          </p>
        )
      ) : (
        <p className="packetDiscount">Bu paket ödənişsizdir !</p>
      )}
      <span className="division"></span>
      <ul className="featureList">
        {data.details.map((item) => (
          <li className="listItem" key={item.id}>
            {item.detail}
          </li>
        ))}
      </ul>
      <button className="cardBtn">Tezliklə əldə edə biləcəksiniz</button>
    </div>
  );
};

export default PacketCard;
