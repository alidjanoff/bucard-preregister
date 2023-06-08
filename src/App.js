// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
