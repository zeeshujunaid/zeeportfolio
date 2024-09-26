/* eslint-disable react/prop-types */
import "./SecondBanner.css";

const SecondBanner = ({data}) => {
    const{imgUrl, heading, span, heading2, description} = data;
  return (
    <div className="about-banner-wrapper">

        <div className="about_banner_img">
            <img src={imgUrl} alt="" />
        </div>


        <div className="about_text_wrapper">
            <h2>{heading}<span> {span}</span></h2>
            <h3>{heading2}</h3>
            <p>{description}</p>
        </div>

    </div>
  )
}

export default SecondBanner
