import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Todo from "./components/Todo";

const Content = () => {
  return (
    <Routes>
      <Route path="/todo" element={<Todo />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Todo />} />
      <Route path="*" element={<Todo />} />
    </Routes>
  );
};

export default Content;
