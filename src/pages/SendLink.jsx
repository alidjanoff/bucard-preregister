import { useContext, useEffect, useState } from "react";

// Context
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../utils/MainContext";

const SendLink = () => {
  // Global states
  const { phone } = useContext(MainContext);

  //   Router
  const navigate = useNavigate();

  const [count, setCount] = useState(30);

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
      <section className="sendLink">
        <h3 className="infoText">
          We already send recovery link to this number:
          <span className="phoneNumber"> {phone}</span>
        </h3>
        <p className="request">Please check your phone</p>
        <p className="request">
          It will redirect to the home page after
          <span className="timer">{count}</span>seconds.
        </p>
        <Link to="/">Go home page now</Link>
        {/* Only developement mode. After production remove this code block */}
        <p style={{ color: "red" }}>
          This link only developement mode.
          <Link to="/recover-password">View recover page</Link>
        </p>
        {/* Only developement mode. After production remove this code block */}
      </section>
    </main>
  );
};

export default SendLink;
