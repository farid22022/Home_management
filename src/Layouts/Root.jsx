import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer"
import Header from "../Shared/Header/Header";
// import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="mx-auto max-w-6xl">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <h2>This is root</h2>
        </div>
    );
};

export default Root;