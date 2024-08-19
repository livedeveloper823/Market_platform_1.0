import { ReactNode } from "react";

export interface BtnProps {
    text?: string,
    price?:number,
    value?: string,
    icon?: ReactNode,
    onClick?: () => void,
    className?: string,
}

export interface YesNoProps {
    text?: string,
    price: string,
    icon?: ReactNode,
    onClick?: () => void,
    className?: string,
}