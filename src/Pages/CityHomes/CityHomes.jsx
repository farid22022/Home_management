import { } from "react-router-dom";
import CityHome from "../CityHome/CityHome";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const CityHomes = () => {

    const [cityHomes , setCityHomes] = useState([]);

    useEffect(() => {
        fetch('cityHome.json')
        .then(res => res.json())
        .then(data => setCityHomes(data));
    }, [])

    return (
        
        <div>
            <Helmet>
                <title>Town Home</title>
            </Helmet>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 space-x-3 space-y-2">
            {
                cityHomes.map(cityHome =><CityHome key={cityHome.townhouse_id} cityHome={cityHome}></CityHome>)
            }
        </div>
        </div>
    );
};

export default CityHomes;