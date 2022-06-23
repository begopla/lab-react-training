
import Rating from "./Rating"
const DriverCard = ({name, rating, img,  car}) => {
 
  return (
    <div>
      <div className="driver-container">
        <img  src={img} alt="driver profile" />
        <div className="driver-text-container">
            <h2 className="driver-name">{name}</h2>
            <Rating >{Math.round(rating)}</Rating>
        </div>
      </div>
    </div>
  )
}

export default DriverCard