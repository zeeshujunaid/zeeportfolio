import Card  from "../Common/Card/Card.jsx";
import Heading from "../Common/Heading/Heading";
import "./Testimonial.css";
import "./responsive.css";
import CardData from "../Common/Card/CardData.js";


const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-wrapper">
            <Heading text="My" Span="Testimonial"/>

            <Card data={CardData}/>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
