import "./StyleSheets/FeaturesContainer.css";
import Feature from "./Feature";
import { Fade, Slide } from "react-awesome-reveal";
import puzzleImage from "../assets/puzzle.png";
import instantRecipe from "../assets/instant-recipe.png";
import sharePic from "../assets/share.png";
import featuresPic from "../assets/features-pic.gif";
import "aos/dist/aos.css";
import Button from "./Button";

const FeaturesContainer = () => {
  let firstFeatureTitle = "Instant recipes";
  let secondFeatureTitle = "Add input to the recipe";
  let thirdFeatureTitle = "Easily share recipes";

  let firstDescription = // still working on the descriptions
    "By simply taking a picture of any dish you have in" + " front of you, ";

  return (
    <div>
      <Fade>
        <div className="header-container">
          <div className="features-content">
            <Slide direction="left">
              <div className="border image-container">
                <img src={featuresPic} alt="test_image" className="image" />
              </div>
            </Slide>
            <div className="features-list">
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
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FeaturesContainer;
