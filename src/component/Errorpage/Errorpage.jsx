import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    return (
        <div>
            <h3>Ooop!!!</h3>
            <h4>Error Page Go to back Home</h4>
            <p>{error.meessage}</p>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Errorpage;