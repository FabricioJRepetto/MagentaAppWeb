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
            timeout: 0,
            type: 'dark'
        }

        createToast('Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nostrum dolore architecto? Mollitia explicabo qui veritatis in expedita ipsam laborum, odit perferendis incidunt animi rem consequuntur, dolores soluta adipisci assumenda!', options)
    }

    return (
        <>
            <div className='flex justify-center'>
                <img src={magentaLogo} className="logo" alt="Magenta logo" />
            </div>
            <h1>Magenta Productivity app</h1>
            <p className="read-the-docs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus maiores reprehenderit, inventore, aliquam esse a architecto dolorem, doloribus ipsa laboriosam! Consequuntur eius quia animi porro iure voluptatum error saepe?
            </p>

            <h1>LandingPage</h1>
            <p className="read-the-docs">
                Test de toasts
            </p>
            <div className='flex gap-2 justify-center'>
                <button onClick={testNotification1}> toast 1 </button>
                <button onClick={testNotification2}> toast 2 </button>
                <button onClick={destroyAllToasts}> clear toasts </button>
            </div>
        </>
    )
}

export default LandingPage