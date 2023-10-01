import { FC, createContext, ReactNode, useState } from 'react'
import { GlobalContextType, Config, Logs, User } from '../../types/context/context';

interface Props {
    children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const ContextProvider: FC<Props> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null)
    const [config, setConfig] = useState<Config | null>(null)
    const [logs, setLogs] = useState<Logs | null>(null)
    const [filteredLogs, setFilteredLogs] = useState<Logs | null>(null)
    const [usersList, setUsersList] = useState<User[] | null>(null)

    const [isLogged, setLogged] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)

    /**
     * Guardar datos del usuario (info)
     * @param user_data 
     */
    const saveUser = (user_data: User): void => {
        setUser(user_data)
        setLogged(true)
    }

    /**
     * Guardar datos del usuario (configuración)
     * @param config_data 
     */
    const saveConfig = (config_data: Config): void => {
        setConfig(config_data)
    }

    /**
     * Guardar datos del usuario (registros)
     * @param logs_data 
     */
    const saveLogs = (logs_data: Logs): void => {
        setLogs(logs_data)
    }

    const saveFilteredLogs = (filtered_list: Logs) => {
        setFilteredLogs(filtered_list)
    }

    const saveUsersList = (users_list: User[]) => {
        setUsersList(users_list)
    }

    const changeLoading = (state: boolean): void => {
        setLoading(state)
    }
    /**
     * Vaciar Estado global
     */
    const logout = (): void => {
        setUser(null)
        setConfig(null)
        setLogs(null)
        setFilteredLogs(null)
        setUsersList(null)
        setLoading(false)
        setLogged(false)
    }

    return (
        <GlobalContext.Provider value={{
            user,
            config,
            logs,
            filteredLogs,
            usersList,
            isLoading,
            isLogged,

            saveUser,
            saveConfig,
            saveLogs,
            saveFilteredLogs,
            saveUsersList,
            changeLoading,
            logout
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default ContextProvider;