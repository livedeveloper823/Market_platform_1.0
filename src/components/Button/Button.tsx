import { BtnProps } from "../../types/buttons";

const Button: React.FC<BtnProps> = ({ icon, text, onClick, onMouseEnter, onMouseLeave, className, children }) => {
    return (
        <div>
            <div onClick={onClick} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={`${className} cursor-pointer`}>
                {icon}
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
}
export default Button;