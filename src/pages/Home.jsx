// Pages
import Hero from "./sections/Hero";
import ChangePlan from "./sections/ChangePlan";
import Packets from "./sections/Packets";
import Notify from "./sections/Notify";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChangePlan />
        <Packets />
        <Notify />
      </main>
      <Footer />
    </>
  );
};

export default Home;
