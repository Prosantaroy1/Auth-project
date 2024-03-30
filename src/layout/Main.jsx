import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Main;