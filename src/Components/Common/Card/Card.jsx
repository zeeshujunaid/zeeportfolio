import "./Card.css";


const Card = ({data}) => {
  return (
    <div className="card-wrapper">
      {data.map((item, index)=>{
        return(
            <div key={index} className="card_box">
            <img src={item.imgUrl} alt="" />
            <p>{item.description}</p>
            <h3>{item.heading}</h3>
            <h5>{item.designation}</h5>
            </div>
        )
      })}
    </div>
  )
}

export default Card
