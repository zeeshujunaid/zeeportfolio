import { NavLink } from "react-router-dom";
import "./Footer.css";
import "./responsive.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrapper">
            <div className="Footerlogo-wrapper">
                <NavLink to="/"><img src="./assets/images/Footer_logo.png" alt="" /></NavLink>
            </div>

            <p>@ 2019-2023</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
