import { BtnProps } from "../types/buttons";

const Button:React.FC<BtnProps> = ({ icon, text, onClick, className}) => {
    return <button onClick={onClick} className={`${className}`}>
        {icon}
        <p>{text}</p>
    </button>
}

export default Button;