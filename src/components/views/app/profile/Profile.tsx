import { useContext } from "react";
import { GlobalContext } from "../../../../infra/context/GlobalContext";
import { GlobalContextType } from "../../../../types/context/context";
import ConfigPanel from "./ConfigPanel";
import { ToastOptions, createToast, destroyAllToasts } from 'vercel-toast'

const Profile = () => {
    // const [fetching, setFetching] = useState(true)
    const { isLoading } = useContext(GlobalContext) as GlobalContextType

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
        <div>
            <h1>Profile</h1>
            {isLoading
                ? <p>cargando</p>
                : <ConfigPanel />
            }
            <div className='flex gap-2 justify-center'>
                <button onClick={testNotification1}> toast 1 </button>
                <button onClick={testNotification2}> toast 2 </button>
                <button onClick={testNotification3}> toast error </button>
                <button onClick={destroyAllToasts}> clear toasts </button>
            </div>
        </div>
    )
}

export default Profile