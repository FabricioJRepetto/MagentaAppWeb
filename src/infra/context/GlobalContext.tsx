import { FC, createContext, ReactNode, useState } from 'react'
import { Account, GlobalContextType } from '../Types'
import { elementSelector, filterOriginalList } from '../utils/contextUtils';

interface Props {
    children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const ContextProvider: FC<Props> = ({ children }) => {
    /*
        - User Account data
        - User config
        - User Logs
        - Filtered Logs

        - Users List
    */

    const [account, setAccount] = useState(null)
    const [config, setConfig] = useState(null)
    const [logs, setLogs] = useState([])
    const [filteredLogs, setFilteredLogs] = useState([])
    const [usersList, setUsersList] = useState([])

    const [loading, setLoading] = useState(true)

    // Guardar respuesta de la API
    const saveAccount = (data): void => {

    }

    // Vaciar Estado global
    const logout = (): void => {
        setAccount(null)
        setConfig(null)
        setLogs([])
        setFilteredLogs([])
        setUsersList([])
        setLoading(false)
    }

    return (
        <GlobalContext.Provider value={{
            saveAccount,
            loading,
            logout
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default ContextProvider;