import { ReactNode } from "react";

export type KeyedObject = {
    [key: string]: string | number | KeyedObject;
};
export interface TabProps {
    title: string;
    content: string;
}

export interface IconProps {
    className?: string;
    size?: number;
    color?: string;
}
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

export interface TopEventCardProps {
    text: string,
    btn_text: string,
    onClick: () => void,
    img_url?: string,
    className?: string,
}
export interface MyPropertyProps {
    className: string,
    text: string,
    icon: ReactNode,
    value: number,
}

export interface SubContentProps {
    title: string,
    url?: string,
    img_url?: string,
    percent: string,
}
export interface EventProps {
    title: string,
    img_url: string,
    total_bet: number,
    url?: string,
    event_date?: Date,
    subcontent: SubContentProps[],
}
// Auth types
export interface UserProfileProps {
    id?: number,
    email?: string,
    avatar?: string,
    username: string,
    password?: string,
    role?: string,
}
export interface AuthProps {
    isLoggedIn: boolean,
    isInitialized?: boolean,
    user?: UserProfileProps | null,
    token?: string | null
}

export interface AuthActionProps {
    type: string,
    payload?: AuthProps,
}

export type JWTContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfileProps | null | undefined;
    logout: () => void;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, username: string,) => Promise<void>;
 
    // addEvent: ();
    resetPassword?: (email: string) => Promise<void>;
    updateProfile?: VoidFunction;
};

//   Notification context
export interface NotificationContextValue {
    showNotification: (msg: string, type: "success" | "error" | "info" | "warning") => void;
}
