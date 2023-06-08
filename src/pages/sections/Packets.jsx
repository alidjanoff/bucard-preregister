import { useState } from "react";

// Components
import PacketCard from "../../components/PacketCard";

// Fake DB
import packetsData from "../../db/packetsData";

const Packets = () => {
  const [anually, setAnually] = useState(false);

  return (
    <section className="packets">
      <div className="container">
        <div className="row">
          <div className="packetsHead">
            <h2 className="packetsTitle">
              Xəyalındakı biznes profilini yarat!
            </h2>
            <div className="btnGroup">
              <button
                className={anually ? "tabBtn" : "tabBtn active"}
                onClick={() => setAnually(false)}
              >
                Aylıq
              </button>
              <button
                className={anually ? "tabBtn active" : "tabBtn"}
                onClick={() => setAnually(true)}
              >
                İllik
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
