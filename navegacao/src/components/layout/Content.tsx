import { Route, Routes } from "react-router-dom";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";
import Param from "../../views/examples/Param";
import "./Content.css";

const Content = (props: any) => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/param/:id" element={<Param />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Content;
