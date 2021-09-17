import "./App.css";
import Credit from "./components/Credit";
import Intro from "./components/Intro";
import LineGraph from "./components/LineChart";
import Reference from "./components/Reference";

function App() {
  return (
    <div className="App">
      <Intro />
      <LineGraph />
      <Reference />
      <Credit />
    </div>
  );
}

export default App;
