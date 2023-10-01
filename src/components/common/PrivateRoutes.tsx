import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContextType } from "../../types/context/context";
import { GlobalContext } from "../../infra/context/GlobalContext";

const PrivateRoutes = () => {
    const { isLogged } = useContext(GlobalContext) as GlobalContextType;

    return (
        isLogged ? <Outlet /> : <Navigate to='/login' />
    )
};

export default PrivateRoutes