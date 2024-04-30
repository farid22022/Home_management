import Marquee from "react-fast-marquee";
import { useLoaderData, useParams } from "react-router-dom";
import { saveHomes } from "../../Utility/LocalStorageCityHome";
import { ToastContainer, toast } from "react-toastify";

const SelectedHomeCard = () => {

    const selectedHomes = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const selectedHomeCard = selectedHomes.find((selectedHomeCard ) =>selectedHomeCard.id === idInt);

    const handleSaveHome = () =>{
      saveHomes(idInt);
      toast("Home details added");
      console.log(saveHomes);
    }


  return (
    <div className="card w-96 bg-base-100 shadow-xl justify-center">
      <figure>
        <img
          className="rounded-md"
          src={selectedHomeCard.image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <Marquee className="card-title text-pink-500 font-serif">{selectedHomeCard.estate_title}</Marquee>
        <p>Name  : {selectedHomeCard.segment_name}</p>
        <p >Location: <span className="font-semibold">{selectedHomeCard.location}</span></p>
        <p className="text">Description :<span className="font-mono">{selectedHomeCard.description}</span></p>

        <div className="flex mt-6 justify-around border-spacing-2 text-xl">
            <p>Area : {selectedHomeCard.area} </p>
            <p>Owner : <span className="font-serif text-cyan-500">{selectedHomeCard.owner}</span></p>
        </div>
        <div className="flex mt-4 justify-around border-spacing-1 text-xl ">
            <p className="p-2 text-green-500">Status : {selectedHomeCard.status}</p>
            <p className="p-2">Price : <span className="text-red-700">{selectedHomeCard.price}</span></p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={handleSaveHome} className="btn btn-primary">Book Now!</button>
        </div>
        <ToastContainer/>
      </div>
      
    </div>
  );
};

export default SelectedHomeCard;
