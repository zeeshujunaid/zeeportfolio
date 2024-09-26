/* eslint-disable react/prop-types */
import "./ProjectBanner.css";

const ProjectBanner = ({data}) => {
    
    const {imgUrl, serialNo, heading, para, read, readLink, isReverse} = data;
    return (
    <div className={isReverse == true ? "banner_reverse" : "banner_wrapper"}>
      <div className="img_wrapper">
        <img src={imgUrl} alt="" />
      </div>

      <div className="text_wrapper">
        <h2>{serialNo}</h2>
        <h3>{heading}</h3>
        <p>{para}</p>
        <a href={readLink}><img src={read} alt="" /></a>
      </div>
    </div>
  )
}

export default ProjectBanner
