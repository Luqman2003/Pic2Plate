import "./StyleSheets/Button.css";

interface Props {
  os: string;
}

const Button = ({ os }: Props) => {
  const onClick = () => {
    if (os == "iOS") {
      console.log("iOS link");
    } else {
      console.log("Android download link");
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary button"
        onClick={onClick}
      >
        Download from {os}
      </button>
    </div>
  );
};

export default Button;
