import {
    MapContainer ,
    TileLayer
} from 'react-leaflet';
import '../../App.css'

const Leaf = () => {

    const center = [10.77127860569783 , 106.69012489341263];

    return (
        <MapContainer
        center={center}
           zoom={10}
           style={{width: '100vw', height: '100vh'}}
        >
           
            
        </MapContainer>
    );
};

export default Leaf;