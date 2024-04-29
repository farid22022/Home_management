import { Link } from "react-router-dom";


const Meanu = () => {
    return (
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 py-4 mt-2 mb-6 rounded-badge">
            <li><Link className="text-2xl mr-3 rounded-lg border rounded-t-md mt-6" to="/">Single Family Homes</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border rounded-t-md mt-6" to="/leaf">Map</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border mt-6" to="/cityhome">Townhouses</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border mt-6" to="/">Apartments</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border mt-6" to="/">Student Housing</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border rounded-b-md mt-6" to="/"> vacation rentals </Link></li>
        </ul>
    );
};

export default Meanu;