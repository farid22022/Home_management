import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="animate__animated animate__bounce animate__faster text-center justify-center space-y-6">
            <div className="grid grid-cols-1 text-center justify-center ">
                <h2 className="animate__animated animate__bounce text-3xl mt-72 mb-14 bg-gradient-to-r from-indigo-500 ...">
                    Page Not Found
                    
                </h2>
                
            </div>
            <Link to='/'><button className="font-serif font-semibold rounded-md p-4 text-2xl text-red-500 font0 bg-gradient-to-r from-green-400 to-blue-300 hover:from-pink-500 hover:to-yellow-500 ...">Back to Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;