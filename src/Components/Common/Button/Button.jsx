import "./Button.css";
import "./responsive.css";

const Button = (props) => {
    const{text, isImg} = props;

  return (
    <button>{text}{isImg && <img src="./assets/images/download.png"/>}</button>
  )
}

export default Button
