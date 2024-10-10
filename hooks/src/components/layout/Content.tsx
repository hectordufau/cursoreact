import { Route, Routes } from "react-router-dom";
import "./Content.css";

import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";
import UseCallback from "../../views/examples/UseCallback";
import UseContext from "../../views/examples/UseContext";
import UseCustom from "../../views/examples/UseCustom";
import UseEffect from "../../views/examples/UseEffect";
import UseMemo from "../../views/examples/UseMemo";
import UseReducer from "../../views/examples/UseReducer";
import UseRef from "../../views/examples/UseRef";
import UseState from "../../views/examples/UseState";

const Content = (props: any) => (
  <main className="Content">
    <Routes>
      <Route path="/useState" element={<UseState />} />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useCustom" element={<UseCustom />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
