// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import RegisterInfoPage from "./pages/RegisterInfoPage";

const App = () => {
  console.log(
    '%cDİQQƏT !!! Bura daxil olmaq çox təhlükəlidir. Bura yalnız "Developer"-lər üçündür !!!',
    "color: white; font-size: 30px; background-color: red; font-weight: 900; text-align: center;"
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-info-page" element={<RegisterInfoPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
