import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { useState } from "react";
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import DataContext, { data } from "../data/DataContext";
import Store from "../data/Store";

const App = (props: any) => {
  const [state, setState] = useState(data);
  return (
    <Store>
      <DataContext.Provider value={{ state, setState }}>
        <div className="App">
          <Router>
            <Menu />
            <Content />
          </Router>
        </div>
      </DataContext.Provider>
    </Store>
  );
};

export default App;
