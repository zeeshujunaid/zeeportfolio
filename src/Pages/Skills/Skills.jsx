/* eslint-disable react/prop-types */
import Heading from "../../Components/Common/Heading/Heading"
import SkillBox from "../../Components/Common/SkillBox/SkillBox"
import "./responsive.css";
import "./Skills.css";

const Skills = ({data}) => {
  return (
    <section id="skill" className="Skill">
      <div className="container">
        <div className="skills_wrapper">
        <Heading text="My" Span="Skills"/>

        <div className="skills_boxes">
          {
            data.map((item, index)=>{
              return(
                <SkillBox key={index} data={item}/>
              )
            })
          }
        </div>
        </div>  
      </div>      
    </section>
  )
}

export default Skills
