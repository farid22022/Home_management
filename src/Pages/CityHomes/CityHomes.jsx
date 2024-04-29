import { } from "react-router-dom";
import CityHome from "../CityHome/CityHome";
import { useEffect, useState } from "react";


const CityHomes = () => {

    const [cityHomes , setCityHomes] = useState([]);

    useEffect(() => {
        fetch('cityHome.json')
        .then(res => res.json())
        .then(data => setCityHomes(data));
    }, [])

    return (
        
        <div>
            
            <div className="grid md:grid-cols-3 space-x-3 space-y-2">
            {
                cityHomes.map(cityHome =><CityHome key={cityHome.townhouse_id} cityHome={cityHome}></CityHome>)
            }
        </div>
        </div>
    );
};

export default CityHomes;