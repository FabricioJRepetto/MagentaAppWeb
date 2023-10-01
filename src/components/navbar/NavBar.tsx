import { useContext } from "react";
import magentaLogo from "../../assets/icons/logo.png";
import { Outlet, useNavigate } from 'react-router-dom';
import { GlobalContext } from "../../infra/context/GlobalContext";
import { GlobalContextType } from "../../types/context/context";
import userIcon from "../../assets/icons/user.svg";

const NavBar = () => {
    const navigate = useNavigate()
    const { isLogged, user } = useContext(GlobalContext) as GlobalContextType;


    return (
        <>
            <nav className={`w-screen h-16 py-1 text-lg fixed top-0 left-0 flex flex-col justify-between items-center`}>

                <div className='flex justify-between items-center w-full'>
                    <div onClick={() => navigate('/')} className='px-5'>
                        <img src={magentaLogo} alt="megenta logo" className="h-12 cursor-pointer" />
                    </div>

                    <div className='h-fit flex gap-4 px-6'>
                        {!isLogged && <p onClick={() => navigate('/login')} className="cursor-pointer">login</p>}
                        {isLogged && <>
                            <span onClick={() => navigate('/app/user')} className="flex gap-2 cursor-pointer">
                                <img src={user?.picture || userIcon} alt="profile picture" className="h-8 w-8 rounded-full" style={{ border: "2px solid var(--magenta)" }} />
                                <p>{user?.name.split(" ")[0] || 'Perfil'}</p>
                            </span>
                            <p onClick={() => navigate('/app')} className="cursor-pointer">Dashboard</p>
                        </>}

                    </div>
                </div>

            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default NavBar