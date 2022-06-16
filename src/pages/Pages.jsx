import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
