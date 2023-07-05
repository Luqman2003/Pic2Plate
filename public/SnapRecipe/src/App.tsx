import Header from "./components/Header";
import Logo from "./components/Logo";
import FeaturesContainer from "./components/FeaturesContainer";
import "./App.css";

function App() {
  return (
    <div className="background">
      <Logo></Logo>
      <Header></Header>
      <FeaturesContainer></FeaturesContainer>
    </div>
  );
}

export default App;
