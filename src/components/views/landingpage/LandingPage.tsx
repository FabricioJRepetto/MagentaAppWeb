import { ToastOptions, createToast, destroyAllToasts } from 'vercel-toast'

import magentaLogo from '../../../assets/icons/logo.png'

const LandingPage = () => {
    const testNotification1 = (): void => {
        const options: ToastOptions = {
            timeout: 0,
            type: 'dark',
            action: {
                text: "acción",
                callback: () => { }
            },
            cancel: "cancelar"
        }

        createToast("Probando notificaciones de la librería vercel toast", options)
    }
    const testNotification2 = (): void => {
        const options: ToastOptions = {
            type: 'dark'
        }

        createToast('Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nostrum dolore architecto? Mollitia explicabo qui veritatis in expedita ipsam laborum, odit perferendis incidunt animi rem consequuntur, dolores soluta adipisci assumenda!', options)
    }
    const testNotification3 = (): void => {
        const options: ToastOptions = {
            type: 'error',
            cancel: 'OK'
        }
        createToast('Lorem ipsum dolor sit amet consectetur adipisicing elit!', options)
    }

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
                <li>2 • Ir al canal de <b><a href='https://join.slack.com/t/magentaproduc-dqe3450/shared_invite/zt-22zcuxzs1-JVymFP7FG8NWmFktqpCrRw'>Slack</a></b> y utilizar el comando <b>/Registrarse</b> para vincular Slack a tu cuenta.</li>
                <li>3 • En la <b>Home de la app</b> podés configurar las notificaciones (días, horas) que te va a mandar el bot para recordarte que registres actividades.</li>
                <li>4 • En la <b>Home de la app</b> también podés registrar actividades.</li>
            </ul>
            <b className='text-2xl text-rose-600'>A tener en cuenta!</b>
            <ul className="text-rose-600">
                <li>• De momento solo se pueden registrar actividades desde Slack.</li>
                <li>• De momento solo se pueden CREAR actividades (cuidado con los errores).</li>
            </ul>

            <div className='flex gap-2 justify-center'>
                {/* <button onClick={testNotification1}> toast 1 </button> */}
                {/* <button onClick={testNotification2}> toast 2 </button> */}
                {/* <button onClick={testNotification3}> toast error </button> */}
                {/* <button onClick={destroyAllToasts}> clear toasts </button> */}
            </div>
        </div>
    )
}

export default LandingPage