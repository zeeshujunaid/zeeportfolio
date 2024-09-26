import SecondBanner from "../../Components/SecondBanner/SecondBanner";
import "./About.css";
import "./responsive.css";
import SecondBannerData from "../../Components/SecondBanner/SecondBannerData";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <SecondBanner data={SecondBannerData}/>
        </div>
      </div>
    </section>
  )
}

export default About
