import { Link } from "react-router-dom";


const Meanu = () => {
    return (
        <ul className="menu menu-vertical lg:menu-horizontal py-4  mb-6 rounded-badge mt-20">
            <li><Link className="text-2xl mr-3 rounded-lg border rounded-t-md mt-6 text-green-900" to="/">Single Family Homes</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border mt-6 text-pink-500" to="/cityhome">Town Houses</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border mt-6 text-yellow-950" to="/">Apartments</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border mt-6 text-red-800"  to="/">Student Housing</Link></li>
            <li><Link className="text-2xl mr-3 rounded-lg border rounded-b-md mt-6 text-blue-300" to="/"> vacation rentals </Link></li>
        </ul>
    );
};

export default Meanu;