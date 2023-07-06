import "./StyleSheets/FeaturesContainer.css";
import Feature from "./Feature";
import { Fade, Slide } from "react-awesome-reveal";
import featuresPic from "../assets/features-pic.gif";
import featuresData from "../featuresData";

import "aos/dist/aos.css";

const FeaturesContainer = () => {
  return (
    <div className="feature-container">
      <div className="feature-title-container">
        <Fade>
          <h1 className="feature-section-title">Features</h1>
        </Fade>
      </div>
      <div>
        <Slide triggerOnce={true} direction="left">
          <img className="image rocket-image" src={featuresPic}></img>
        </Slide>
      </div>
      <div className="feature-cards">
        <Slide direction="right" triggerOnce={true}>
          {featuresData.map((element) => {
            return (
              <Feature
                title={element.title}
                description={element.description}
                imageSrc={element.picture}
              ></Feature>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default FeaturesContainer;
