import { useState } from "react";

// Components
import PacketCard from "../../components/PacketCard";

// Fake DB
import packetsData from "../../db/packetsData";

// Translation
import { useTranslation } from "react-i18next";

const Packets = () => {
  // Translation
  const { t } = useTranslation();

  // Local state
  const [anually, setAnually] = useState(false);

  return (
    <section className="packets" id="bucardPackets">
      <div className="container">
        <div className="row">
          <div className="packetsHead">
            <h2 className="packetsTitle">{t("packets.title")}</h2>
            <div className="btnGroup">
              <button
                className={anually ? "tabBtn" : "tabBtn active"}
                onClick={() => setAnually(false)}
              >
                {t("packets.month")}
              </button>
              <button
                className={anually ? "tabBtn active" : "tabBtn"}
                onClick={() => setAnually(true)}
              >
                {t("packets.year")}
              </button>
            </div>
          </div>
          <div className="selectPacket">
            {packetsData.map((pack) => (
              <PacketCard data={pack} key={pack.id} state={anually} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packets;
