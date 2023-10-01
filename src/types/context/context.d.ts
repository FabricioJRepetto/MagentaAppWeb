export interface GlobalContextType {
    user: User | null;
    config: Config | null;
    logs: Logs | null;
    filteredLogs: Logs | null;
    usersList: User[] | null;
    isLoading: boolean;
    isLogged: boolean;

    saveUser: (user_data: User) => void,
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
    picture: string | undefined
    role: string
    _id: string
    google_id: string;
    slack_id?: string;
}

export interface Config {
    id: string;
    active_hours: {
        from: number,
        to: number
    };
    active_days: number[];
    notification: boolean;
    reminder_time: number;
}

export interface Logs {
    id: string;
    user: string;
    entries: Entry[]
}

export interface Entry {
    month: number;
    year: number;
    days: Day[];
}

export interface Day {
    date: string;
    activity: Activity[]
}

export interface Activity {
    date: string;
    hours: {
        from: number;
        to: number;
    };
    description: string;
    category: CATEGORY,
    subcategory: SUBCATEGORY,
    energy: number,
    emotion: EMOTION,
    gc_event_id?: string
}

