import Banner from "../../Components/Banner/Banner"
import Banner1Data from "../../Components/Banner/BannerData"
import SkillData from "../../Components/Common/SkillBox/SkillData"
import Experience from "../../Components/Experience/Experience"
import Header from "../../Components/Header/Header"
// import Testimonial from "../../Components/Testimonial/Testimonial"
import About from "../About/About"
import ContactUs from "../Contact/ContactUs"
import Project from "../Project/Project"
import Skills from "../Skills/Skills"
import ContactUsData from "../Contact/ContactUsData"

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner data={Banner1Data}/>
        <Skills data={SkillData}/>
        <Experience/>
        <About/>
        <Project/>
        {/* <Testimonial/> */}
        <ContactUs data={ContactUsData}/>
    </div>
  )
}

export default Home
