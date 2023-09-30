import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    //TODO tomar usuario del context 
    const user = {
        id: true
    }

    return (
        user?.id ? <Outlet /> : <Navigate to='/login' />
    )
};

export default PrivateRoutes