import myImage from "../assets/food_gif.gif";
import "./StyleSheets/Header.css";
import Button from "./Button";
import { Fade, Slide } from "react-awesome-reveal";
import Arrow from "./Arrow";

const Header = () => {
  return (
    <div>
      <Fade>
        <div className="header-container">
          <div className="border">
            <h1 className="title-tag">Welcome to Pic2Plate!</h1>
            <div className="typewriter-container">
              <p className="typing-tag">
                Revolutionzing the cooking industry for both casuals and pros
              </p>
            </div>
            <div className="button-div">
              <Button os="iOS"></Button>
              <Button os="Android"></Button>
              <p></p>
            </div>
          </div>
          <Slide direction="right" triggerOnce={true}>
            <div className="border">
              <img src={myImage} alt="test_image" className="image" />
            </div>
          </Slide>
        </div>
      </Fade>
      <Arrow></Arrow>
    </div>
  );
};

export default Header;
