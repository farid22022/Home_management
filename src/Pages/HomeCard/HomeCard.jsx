const HomeCard = ({ home }) => {
  const { segment_name, area, image, status ,facilities} = home;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
  );
};

export default HomeCard;
