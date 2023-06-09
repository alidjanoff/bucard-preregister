// Router
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <section className="notFound">
        <h3 className="infoText">Axtardığınız səhifə tapılmadı</h3>
        <Link to="/">Əsas səhifəyə geri dönün</Link>
      </section>
    </main>
  );
};

export default NotFound;
