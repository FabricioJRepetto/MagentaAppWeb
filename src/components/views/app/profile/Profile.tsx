import { useContext } from "react";
import { GlobalContext } from "../../../../infra/context/GlobalContext";
import { GlobalContextType } from "../../../../types/context/context";
import ConfigPanel from "./ConfigPanel";

const Profile = () => {
    // const [fetching, setFetching] = useState(true)
    const { isLoading } = useContext(GlobalContext) as GlobalContextType

    return (
        <div>
            <h1>Profile</h1>
            {isLoading
                ? <p>cargando</p>
                : <ConfigPanel />
            }
        </div>
    )
}

export default Profile