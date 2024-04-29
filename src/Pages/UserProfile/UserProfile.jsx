import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { getStoredHome } from "../../Utility/LocalStorageCityHome";
import BroughtHome from "../BroughtHome/BroughtHome";
import 'animate.css';
import { Helmet } from "react-helmet-async";

const UserProfile = () => {

    const {user } = useContext(AuthContext);

    const Homes = useLoaderData();
    const [selectedHomes, setSelectedHomes] = useState([]);

    useEffect(() => {
      const listedHomes = getStoredHome();
      if (Homes.length > 0) {
        const listedBroughtHome = [];
        for (const homeId of listedHomes) {
          const broughtHome = Homes.find(broughtHome => broughtHome.id === homeId);
          if (broughtHome) {
            listedBroughtHome.push(broughtHome);
          }
        }
        setSelectedHomes(listedBroughtHome);
      }
    }, [Homes]);


  return (
    <div className="text-center card w-full bg-base-100 shadow-xl">
      <Helmet>
        <title>
          User Profile
        </title>
      </Helmet>
      <figure>
        {
            user?
            <img className="w-44 rounded-md animate-pulse " src={user.photoURL}/>
            :
            <span className="loading loading-spinner text-error"></span>
        }
      </figure>
      <div className="">
        {/* <h2 className="p-4">Name:  {user.name}</h2> */}
        <p className="text-2xl p-4 animate__animated animate__bounce animate__repeat-2 text-emerald-700 font-semibold">Email : <span className="text-violet-900">{user.email}</span></p>
      </div>
      <div className="border-green-500">
          {
              selectedHomes.map(broughtHome =>{
                <BroughtHome key={broughtHome.id} broughtHome={broughtHome}></BroughtHome>
            })
          }
      </div>
    </div>
  );
};

export default UserProfile;
