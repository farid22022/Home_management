import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer"
import Header from "../Shared/Header/Header";
// import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import Meanu from "../Shared/Meanu/Meanu";

const Root = () => {
    return (
        <div className="mx-auto max-w-6xl">
            <Header></Header>
            <Navbar></Navbar>
            <Meanu></Meanu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;