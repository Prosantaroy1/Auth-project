import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div>
            <h3>TP School</h3>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </nav>
        </div>
    );
};

export default Navber;