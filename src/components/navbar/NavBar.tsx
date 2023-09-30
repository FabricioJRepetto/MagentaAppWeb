import magentaLogo from "../../assets/icons/logo.png";
import { Outlet, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <nav className={`w-screen h-16 py-1 text-lg fixed top-0 left-0 flex flex-col justify-between items-center`}>

                <div className='flex justify-between items-center w-full'>
                    <div onClick={() => navigate('/')} className='px-5'>
                        <img src={magentaLogo} alt="megenta logo" className="h-12 cursor-pointer" />
                    </div>

                    <div className='h-fit flex gap-4 px-5'>
                        <p onClick={() => navigate('/app/user')} className="cursor-pointer">usuario</p>
                        <p onClick={() => navigate('/login')} className="cursor-pointer">login</p>
                        <p onClick={() => navigate('/app')} className="cursor-pointer">menu</p>
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