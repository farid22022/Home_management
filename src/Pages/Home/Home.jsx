import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import Meanu from "../../Shared/Meanu/Meanu";
import HomeCard from "../HomeCard/HomeCard";
import Footer from "../../Shared/Footer/Footer";


const Home = () => {

    const homes = useLoaderData();
    console.log(homes);
    return (
        <div className="grid-cols-1">
            <Meanu className="mt-6"></Meanu>
            <Banner></Banner>
            <div className="grid md:grid-cols-3 mt-6 space-x-6 space-y-4">
                {
                    homes.map(home =><HomeCard 
                        key={home.id} 
                        home={home}>
                    </HomeCard>)
                }
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;