import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfile = () => {

    const {user } = useContext(AuthContext);

  return (
    <div className="text-center card w-full bg-base-100 shadow-xl">
      <figure>
        {
            user?
            <img className="w-44 rounded-md" src={user.photoURL}/>
            :
            <span className="loading loading-spinner text-error"></span>
        }
      </figure>
      <div className="">
        <h2 className="p-4">Name:  {user.name}</h2>
        <p className="text-2xl p-4">Email : {user.email}</p>
      </div>
    </div>
  );
};

export default UpdateProfile;
