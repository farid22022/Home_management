import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

const HomeCard = ({ home }) => {
  const {id, segment_name, area, image, status ,facilities} = home;
    useEffect(() => {
      AOS.init({ duration: "1000" });
  }, []);

  return (
    <Link to={`/selectedhomecard/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl " data-aos="flip-left" >
      <figure>
        <Marquee speed={50+id*5}>
          <img
            className="shadow-2xl rounded-md w-48 max-h-28"
            src={image}
            alt="home"
          />
        </Marquee>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{segment_name}</h2>
        <p>{status}</p>
        <h2>Total area:{area}</h2>
        <ul>
          {facilities.map((facility, index) => (
            <li key={index}>{index+1}) {facility}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary animate__animated animate__fadeInLeft">Buy Now</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default HomeCard;
