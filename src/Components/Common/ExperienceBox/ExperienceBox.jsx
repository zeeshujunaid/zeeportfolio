/* eslint-disable react/prop-types */
import "./ExperienceBox.css";


const ExperienceBox = ({data}) => {
    const {imgUrl, heading, duration, description} = data;
  return (
    <div className="ExperienceBox">
      <div className="ExperienceBox-header">
        <div className="heading-wrapper">
            <img src={imgUrl} alt="" />
            <h3>{heading}</h3>
        </div>
        <p>{duration}</p>
      </div>

      <p>{description}</p>
    </div>
  )
}

export default ExperienceBox
