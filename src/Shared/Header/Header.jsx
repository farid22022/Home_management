import { useEffect } from "react";
import moment from "moment";
import { FcHome } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";



const Header = () => {

    useEffect(() => {
        AOS.init({ duration: "1500" });
    }, []);

    return (
        <div className="text-center mt-4" data-aos="flip-left">
            <div className="flex items-center justify-around">
                <FcHome className="justify-start text-6xl"></FcHome>
                <h4 className="text-3xl justify-end">HavenHues</h4>
            </div>
            <p className="text-2xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;