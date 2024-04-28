
import { Link } from "react-router-dom";

const CityHome = ({ cityHome }) => {
  const {
    townhouse_id,
    address,
    city,
    state,
    zip_code,
    bedrooms,
    bathrooms,
    square_feet,
    price,
    picture,
  } = cityHome;
// `/cityhomecard/${townhouse_id}`
  return (
    <Link to={`/cityhomecard/${townhouse_id}`}>
      <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{address}</h2>
        <p>Facilities are below</p>
        <ul>
            <li>Bedrooms: {bedrooms}</li>
            <li>Bathrooms: {bathrooms}</li>
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Want to Book</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CityHome;
