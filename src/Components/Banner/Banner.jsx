/* eslint-disable react/prop-types */
import "./Banner.css";
import "./responsive.css";
import { IoLogoFacebook, IoLogoInstagram,IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Banner = ({data}) => {
  const {heading1, heading2, heading3, span1Heading, span2Heading, para, imgUrl} = data;
  return (
    <section className="Banner">
      <div className="container">
        <div className="banner-wrapper">
            <div className="text-wrapper">
                <h2> {heading1}<span> {span1Heading}</span> {heading2} <span>{heading3}</span> <span>{span2Heading}</span></h2>
                <p>{para}</p>

                <ul>
                    <li><a href="https://www.instagram.com/zj_webdeveloper/"><IoLogoInstagram /></a></li>
                    <li><a href="https://www.linkedin.com/in/zeeshan-junaid-zeeshu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a></li>
                    <li><a href="mailto:zeeshan.junaid.developer@gmail.com"><SiGmail /></a></li>
                    <li><a href="https://wa.me/+923300342644"><IoLogoWhatsapp /></a></li>
                </ul>
            </div>
            <div className="img-wrapper">
                <img src={imgUrl} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
