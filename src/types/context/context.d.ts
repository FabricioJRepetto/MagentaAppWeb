export interface GlobalContextType {
    user: User | null;
    account: Account | null;
    config: Config | null;
    logs: Logs | null;
    filteredLogs: Logs | null;
    usersList: User[] | null;
    isLoading: boolean

    saveUser: (user_data: User) => void,
    saveAccount: (account_data: Account) => void,
    saveConfig: (config_data: Config) => void,
    saveLogs: (logs_data: Logs) => void,
    saveFilteredLogs: (filtered_list: Logs) => void,
    saveUsersList: (users_list: User[]) => void,
    changeLoading: (state: boolean) => void,
    logout: () => void
}

export interface User {
    email: string
    name: string
    role: string
    picture: string | undefined
    _id: string
}

export interface Account {
    email: string
    name: string
    role: string
    picture: string | undefined
    _id: string
}

export interface Config {
    email: string
    name: string
    role: string
    picture: string | undefined
    _id: string
}

export interface Logs {
    email: string
    name: string
    role: string
    picture: string | undefined
    _id: string
}

