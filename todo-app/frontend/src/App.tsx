import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Content from "./Content";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
};

export default App;
