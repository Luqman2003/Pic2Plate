import Header from "./components/Header";
import FeaturesContainer from "./components/FeaturesContainer";
import Timeline from "./components/Timeline";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <div className="background">
      {/* <Logo></Logo> */}
      <Header></Header>
      <FeaturesContainer></FeaturesContainer>
      <Timeline></Timeline>
      <About></About>
    </div>
  );
}

export default App;
