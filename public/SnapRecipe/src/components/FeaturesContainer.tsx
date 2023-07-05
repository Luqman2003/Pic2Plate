import "./StyleSheets/FeaturesContainer.css";
import Feature from "./Feature";
import { Fade, Slide } from "react-awesome-reveal";
import puzzleImage from "../assets/puzzle.png";
import instantRecipe from "../assets/instant-recipe.png";
import sharePic from "../assets/share.png";

import "aos/dist/aos.css";

const FeaturesContainer = () => {
  let firstFeatureTitle = "Instant recipes";
  let secondFeatureTitle = "Add input to the recipe";
  let thirdFeatureTitle = "Easily share recipes";

  let firstDescription =
    "By simply taking a picture of any dish you have in" + " front of you, ";

  return (
    <Slide direction="right">
      <h1 className="features-title">Features</h1>
      <div className="container">
        <Feature
          imageSrc={instantRecipe}
          title={firstFeatureTitle}
          featureNum={1}
          description="test"
        ></Feature>
        <Feature
          imageSrc={puzzleImage}
          title={secondFeatureTitle}
          featureNum={2}
          description="test"
        ></Feature>
        <Feature
          imageSrc={sharePic}
          title={thirdFeatureTitle}
          featureNum={3}
          description="test"
        ></Feature>
        <p className="more-descriptions">alksjdfal;ksdjfl</p>
      </div>
    </Slide>
  );
};

export default FeaturesContainer;
