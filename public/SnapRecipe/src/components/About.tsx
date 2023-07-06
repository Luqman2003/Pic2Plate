import "./StyleSheets/FeaturesContainer.css";
import Feature from "./Feature";
import { Slide } from "react-awesome-reveal";
import featuresPic from "../assets/features-pic.gif";
import featuresData from "../featuresData";
import "./StyleSheets/About.css";

import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="feature-title-container">
        <h1 className="feature-section-title">About us</h1>
      </div>
      <div className="image-cards-container">
        <div className="feature-cards about-cards">
          <Slide direction="left" triggerOnce={true}>
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
          <div>
            <Slide triggerOnce={true} direction="right">
              <img className="image" src={featuresPic}></img>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
