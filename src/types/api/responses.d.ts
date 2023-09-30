import { User } from "../context/context"

export interface loginResponse {
    error: boolean;
    message: string;
    token?: string;
    user?: User;
}

export interface populatedUserResponse {
    error: boolean;
    message: string;
    user?: PopulatedUser;
}

export interface PopulatedUser {
    name: string;
    config: IConfig | Types.ObjectId;
    logs: ILogs | Types.ObjectId;
    username?: string;
    phone?: string;
    email: string;
    profile_picture?: string;
    google_id?: string;
    slack_id?: string;
    active: boolean;
    password?: string;
    role: ROLES
}