import moment from "moment";
import { FcHome } from "react-icons/fc";


const Header = () => {
    return (
        <div className="text-center">
            <div className="flex items-center justify-around">
                <FcHome className="justify-start text-6xl"></FcHome>
                <h4 className="text-3xl justify-end">HavenHues</h4>
            </div>
            <p className="text-2xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;