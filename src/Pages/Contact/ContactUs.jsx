/* eslint-disable react/prop-types */
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import Button from "../../Components/Common/Button/Button";
import "./ContactUs.css";
import "./responsive.css"
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactUs = ({data}) => {
  const {heading1, span, heading2, description, email, contactNo} = data;
  return (
    <section id="contact" className="contactUs">
      <div className="container">
        <div className="contactUs_wrapper">
            <div className="form-wrapper">
              <form>
                <ul>
                  <li><Button text="Get in Touch"/></li>
                  <li><a href="https://www.instagram.com/zj_webdeveloper/"><IoLogoInstagram /></a></li>
                    <li><a href="https://www.linkedin.com/in/zeeshan-junaid-zeeshu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a></li>
                    <li><a href="mailto:zeeshan.junaid.developer@gmail.com"><SiGmail /></a></li>
                    <li><a href="https://wa.me/+923300342644"><FaPhoneAlt /></a></li>
                </ul>
              </form>
            </div>

            <div className="content-wrapper">
              <h3>{heading1} <span>{span}</span> {heading2}</h3>
              <p>{description}</p>
              <h5>{email}</h5>
              <h5>{contactNo}</h5>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
