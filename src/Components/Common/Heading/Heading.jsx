/* eslint-disable react/prop-types */
import "./Heading.css";


const Heading = (props) => {
    const {text, Span, light} = props;
  return (
    <div className="heading">
      <div className="container">
        <div className="heading-wrapper">
            <h2 className={light && "LightColor"}>{text} <span>{Span}</span></h2>
        </div>
      </div>
    </div>
  )
}

export default Heading
