/* eslint-disable react/prop-types */
import "./SkillBox.css";


const SkillBox = ({data}) => {
    const {imgURL, text} = data;
  return (
    <div className="box">
        <img src={imgURL} alt="" />
        <h5>{text}</h5>
    </div>
  )
}

export default SkillBox
