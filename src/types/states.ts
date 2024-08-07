import { EventProps, UserProfileProps } from ".";

export interface usersStateProps {
    error: string | null,
    users: UserProfileProps[],
}

export interface eventsStateProps {
    error: string | null,
    events: EventProps[],
}

export interface userStateProps{
    user:UserProfileProps,
    error: string | null,
    isLoggedIn: boolean,
}