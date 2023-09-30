import { FC, createContext, ReactNode, useState } from 'react'
import { GlobalContextType, Account, Config, Logs, User } from '../../types/context/context';

interface Props {
    children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const ContextProvider: FC<Props> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null)
    const [account, setAccount] = useState<Account | null>(null)
    const [config, setConfig] = useState<Config | null>(null)
    const [logs, setLogs] = useState<Logs | null>(null)
    const [filteredLogs, setFilteredLogs] = useState<Logs | null>(null)
    const [usersList, setUsersList] = useState<User[] | null>(null)

    const [isLoading, setLoading] = useState<boolean>(true)

    /**
     * Guardar datos del usuario (info)
     * @param user_data 
     */
    const saveUser = (user_data: User): void => {
        setUser(user_data)
    }

    /**
     * Guardar datos de cuenta (info extra, teléfono, slack_id, etc.)
     * @param account_data 
     */
    const saveAccount = (account_data: Account): void => {
        setAccount(account_data)
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
        setAccount(null)
        setConfig(null)
        setLogs(null)
        setFilteredLogs(null)
        setUsersList(null)
        setLoading(false)
    }

    return (
        <GlobalContext.Provider value={{
            user,
            account,
            config,
            logs,
            filteredLogs,
            usersList,
            isLoading,

            saveUser,
            saveAccount,
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