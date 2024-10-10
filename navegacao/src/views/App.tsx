import { BrowserRouter } from "react-router-dom";
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import "./App.css";

const App = (props: any) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
};

export default App;
