// Router
import { Link } from "react-router-dom";

const Notify = () => {
  return (
    <section className="notify">
      <div className="container">
        <div className="row">
          <div className="notifyInfo">
            <h2 className="title">
              Ön qeydiyyat ilə fəaliyyətə <br /> başlayan kimi ilk sən xəbərdar
              ol!
            </h2>
            <Link className="registerBtn" to="/register">
              Qeydiyyatdan keç
            </Link>
            <div className="pattern"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notify;
