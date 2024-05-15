import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        return <span className="ml-[700px] w-20 h-20 mt-20 loading loading-spinner text-warning "></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;