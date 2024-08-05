import { ReactNode } from "react";

export interface BtnProps {
    text: string,
    value: string,
    icon?: ReactNode,
    onClick?: () => void,
    className?: string,
}