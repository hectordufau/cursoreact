import "./App.css";
import About from "./components/About";
import Menu from "./components/Menu";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Todo />
      <About />
    </div>
  );
};

export default App;
