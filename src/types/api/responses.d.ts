import { Config, Logs, User } from "../context/context"

export interface loginResponse {
    error: boolean;
    message: string;
    token?: string;
    user?: User;
    config?: Config;
    logs?: Logs;
}

export interface populatedUserResponse {
    error: boolean;
    message: string;
    user?: PopulatedUser;
}

export interface PopulatedUser {
    _id: string
    name: string;
    config: Config;
    logs: Logs;
    email: string;
    picture?: string;
    username?: string;
    phone?: string;
    google_id?: string;
    slack_id?: string;
    active: boolean;
    password?: string;
    role: ROLES
}
