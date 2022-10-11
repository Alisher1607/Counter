import "./App.css";
import { Funcomp } from "./components/Funcomp";
import { Classcomp } from "./components/Classcomp";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Funcomp name='Alisher' />
      <Classcomp />
      <Menu />
    </div>
  );
}

export default App;
