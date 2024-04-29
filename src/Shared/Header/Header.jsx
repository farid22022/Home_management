import { useEffect } from "react";
import 'animate.css';
import moment from "moment";
import { FcHome } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";



const Header = () => {

    useEffect(() => {
        AOS.init({ duration: "1500" });
    }, []);

    return (
        <div className="text-center mt-4 animate__animated animate__bounce animate_infinite" data-aos="flip-left">
            <div className="flex justify-between animate__animated animate__fadeInLeft">
                <div className="animate__animated animate__bounce animate__repeat-infinite"><FcHome className="justify-start text-6xl w-48"></FcHome></div>
                <h4 className="text-4xl font-bold justify-end font-serif text-sky-500 animate__animated animate__fadeInRight"><span className="animate__animated animate__fadeInRight">HavenHues</span></h4>
            </div>
            <p className="text-2xl myElement font-serif text-pink-700 font-semibold">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;