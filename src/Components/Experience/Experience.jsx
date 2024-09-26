import ExperienceBox from "../Common/ExperienceBox/ExperienceBox";
import Heading from "../Common/Heading/Heading";
import "./Experience.css"; 
import "./responsive.css";
import ExperienceData from "./ExperienceData";

const Experience = () => {
  return (

    <>  
    <section className="experience">
      <div className="container">
        <div className="experience-wrapper">
            <Heading text="My" Span="Education & Certificates" light/>

            {ExperienceData.map((item, index)=>{
                return(
                    <ExperienceBox key={index} data={item}/>
                )
            })}
        </div>
      </div>
    </section>
    </>
  )
}

export default Experience
