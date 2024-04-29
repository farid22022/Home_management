import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import HomeCard from "../HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";


const Home = () => {

    

    const homes = useLoaderData();
    console.log(homes);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="grid-cols-1">
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6 space-x-6 space-y-4">
                {
                    homes.map(home =><HomeCard 
                        key={home.id} 
                        home={home}>
                    </HomeCard>)
                }
            </div>
            
        </div>
        </div>
    );
};

export default Home;
