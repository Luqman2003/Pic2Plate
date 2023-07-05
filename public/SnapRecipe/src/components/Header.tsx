import myImage from "../assets/example_image.jpg";
import "./StyleSheets/Header.css";
import Button from "./Button";
import { Fade, Slide } from "react-awesome-reveal";

const Header = () => {
  return (
    <Fade>
      <div className="header-container">
        <div className="border">
          <h1>Welcome to Pic2Plate!</h1>
          <Fade cascade damping={0.01}>
            Revolutionzing the cooking industry for both casuals and pros
          </Fade>
          <div className="button-div">
            <Button os="iOS"></Button>
            <Button os="Android"></Button>
            <p></p>
          </div>
        </div>
        <Slide direction="right">
          <div className="border">
            <img src={myImage} alt="test_image" className="image" />
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default Header;
