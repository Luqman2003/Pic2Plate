import "./StyleSheets/Feature.css";
import Fade from "react-awesome-reveal";

interface Props {
  featureNum: number;
  title: string;
  description: string;
  imageSrc: string;
}

const Feature = ({ description, title, imageSrc }: Props) => {
  return (
    <div className="indiv hidden">
      <div className="img-title">
        <img className="puzzle" src={imageSrc}></img>
        <h4 className="feature-title">{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
