import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeCard = ({ home }) => {
  const {id, segment_name, area, image, status ,facilities} = home;
    useEffect(() => {
      AOS.init({ duration: "1000" });
  }, []);

  return (
    <Link to={`/selectedhomecard/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-left" data-aos-delay="1000" data-aos-anchor=".example-selector">
      <figure>
        <img
          className="shadow-2xl rounded-md"
          src={image}
          alt="home"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{segment_name}</h2>
        <p>{status}</p>
        <h2>Total area:{area}</h2>
        <h2 className="text-2xl">Facilities are: </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default HomeCard;
