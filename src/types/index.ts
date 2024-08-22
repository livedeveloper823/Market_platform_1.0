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
    title: string;
    isOpen: boolean;
    onClose: () => void;
    connect?: () => void;
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

export interface MarketProps {
    marketName: string,
    url?: string,
    img_url?: string,
    percent: string,
}
export interface EventProps {
    id: number;
    tid: number;
    eventName: string,
    img: string,
    desc: string,
    volume: number,
    url?: string,
    startDate?: Date | undefined,
    endDate?: Date | undefined,
    market: MarketProps[],
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
