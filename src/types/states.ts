import { UserProfileProps } from ".";

export interface userStateProps {
    error: string | null,
    users: UserProfileProps[],
    isLoggedIn: boolean,
}

export interface eventsProps {
    error: string | null,
    events: eventsProps[]
}