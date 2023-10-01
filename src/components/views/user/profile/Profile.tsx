import { useEffect, useState, useContext } from "react";
import { getUserData } from "../../../../infra/microservices/app-api";
import { GlobalContext } from "../../../../infra/context/GlobalContext";
import { GlobalContextType } from "../../../../types/context/context";
import { createToast } from "vercel-toast";
import ConfigPanel from "./ConfigPanel";

const Profile = () => {
    const [fetching, setFetching] = useState(true)
    const { user, config, saveConfig, saveLogs } = useContext(GlobalContext) as GlobalContextType

    useEffect(() => {
        const fetch = async () => {
            if (user?._id && !config) {
                const { user: userData, message } = await getUserData(user._id)
                if (userData) {
                    const { logs, config } = userData;
                    console.log(logs);

                    saveLogs(logs)
                    saveConfig(config)
                } else {
                    createToast(message, { type: "dark", cancel: 'entendido' })
                }
            }
            setFetching(false)
        }
        fetch()
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            <h1>Profile</h1>
            {fetching
                ? <p>cargando</p>
                : <ConfigPanel />
            }
        </div>
    )
}

export default Profile