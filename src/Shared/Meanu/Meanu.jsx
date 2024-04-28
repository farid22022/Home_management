import { Link } from "react-router-dom";


const Meanu = () => {
    return (
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 ">
            <li><Link className="text-2xl border rounded-t-md mt-6" to="/">Single Family Homes</Link></li>
            <li><Link className="text-2xl border mt-6" to="/cityhome">Townhouses</Link></li>
            <li><Link className="text-2xl border mt-6" to="/">Apartments</Link></li>
            <li><Link className="text-2xl border mt-6" to="/">Student Housing</Link></li>
            <li><Link className="text-2xl border rounded-b-md mt-6" to="/"> vacation rentals </Link></li>
        </ul>
    );
};

export default Meanu;