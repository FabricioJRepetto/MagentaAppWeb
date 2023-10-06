import magentaLogo from '../../../assets/icons/logo.png'

const LandingPage = () => {

    return (
        <div className='text-xl'>
            <div className='flex justify-center'>
                <img src={magentaLogo} className="logo" alt="Magenta logo" />
            </div>
            <h1 className='mb-10'>Magenta Productivity app</h1>
            <b className='text-2xl'>Bienvenidos a la primer versión de la app de productividad.</b>
            <p className="text-rose-600 my-4">
                Todo super en desarrollo. Pero ya podemos ir registrando actividades, como para ir teniendo data.<br />
                Ideas y recomendaciones bienvenidas, pero tengan en cuenta que todo en esta página va a cambiar.
            </p>
            <b className='text-2xl'>Instrucciones!</b>
            <ul className='mb-8'>
                <li>1 • Iniciar sesión con Google haciendo click en la opción 'Login' arriba a la derecha.</li>
                <li>2 • Ir al canal de <b><a href='https://join.slack.com/t/magentaproduc-dqe3450/shared_invite/zt-22zcuxzs1-JVymFP7FG8NWmFktqpCrRw' target='_blank'>Slack</a></b> y utilizar el comando <b>/Registrarse</b> para vincular Slack a tu cuenta.</li>
                <li>3 • En la <b>Home de la app</b> podés configurar las notificaciones (días, horas) que te va a mandar el bot para recordarte que registres actividades.</li>
                <li>4 • En la <b>Home de la app</b> también podés registrar actividades.</li>
            </ul>
            <b className='text-2xl text-rose-600'>A tener en cuenta!</b>
            <ul className="text-rose-600">
                <li>• De momento solo se pueden registrar actividades desde Slack.</li>
                <li>• De momento solo se pueden CREAR actividades (cuidado con los errores).</li>
            </ul>
        </div>
    )
}

export default LandingPage