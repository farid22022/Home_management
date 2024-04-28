import { useLoaderData, useParams } from "react-router-dom";



const CityHomeCard = () => {
    
    const cityHomes = useLoaderData();
    const { townhouse_id} = useParams();
    const idInt = parseInt(townhouse_id);
    const cityHome = cityHomes.find((cityHome) => cityHome.townhouse_id === idInt);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img 
          className="shadow-lg rounded-md"
          src={cityHome.picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cityHome.address}</h2>
        <p >Location : {cityHome.address}</p>
        <h2>State: {cityHome.state}</h2>
        <ul>
          <li>Bedrooms : {cityHome.bedrooms}</li>
          <li>Bathrooms : {cityHome.bathrooms}</li>
        </ul>
        <h2>Area : {cityHome.square_feet} Ft<sup>2</sup></h2>
        <p>Price : {cityHome.price} $</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CityHomeCard;
