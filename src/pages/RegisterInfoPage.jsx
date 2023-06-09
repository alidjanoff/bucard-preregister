import { useEffect, useState } from "react";

// Router
import { Link, useNavigate } from "react-router-dom";

const RegisterInfoPage = () => {
  //   Router
  const navigate = useNavigate();

  // Local states
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
      <section className="registerInfoPage">
        <h3 className="infoText">
          Ön qeydiyyatınız tamamlandı. Layihə başladığı zaman sizə bildiriş
          göndəriləcək.
        </h3>
        <p className="request">Diqqətiniz üçün təşəkkür edirik !</p>
        <p className="request">
          Siz <span className="timer">{count}</span> saniyə sonra əsas səhifəyə
          yönləndiriləcəksiz.
        </p>
        <Link to="/">Əsas səhifəyə indi get</Link>
      </section>
    </main>
  );
};

export default RegisterInfoPage;
