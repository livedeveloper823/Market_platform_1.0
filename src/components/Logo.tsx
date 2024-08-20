
import logo from "../assets/logo.png" 
interface ColorProps{
    color?:string
}

const Logo:React.FC<ColorProps> = ({color}) => {
 
    return (
        <div className="flex items-center gap-2" >
            <img src={logo} width={60} alt="logo" />
            <p className={`font-bold text-3xl ${color}`}>Oráculo</p>
        </div>
    )
}
export default Logo;