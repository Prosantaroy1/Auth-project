import { NavLink } from "react-router-dom";

const Navber = () => {
    
    return (
        <div className="flex justify-between items-center py-3 px-16 bg-slate-700 text-white">
            <h3 className="text-2xl font-bold">TP School</h3>
            <nav className="flex gap-7 text-xl">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </nav>
        </div>
    );
};

export default Navber;