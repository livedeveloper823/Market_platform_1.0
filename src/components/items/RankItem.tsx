import { RankItemProps } from "../../types/rank"

const RankItem: React.FC<RankItemProps> = ({ avatar, onClick, price, rank, username }) => {
    return (
        <div className="flex flex-col py-2 rounded-xl">
            <div className="flex items-center py-1 border-b-2 gap-6">
                <div className="relative items-center cursor-pointer">
                    <img className="w-12 rounded-full" src={avatar} alt="User Avatar" />
                    <span className="absolute top-1 -right-2 items-center justify-center text-center w-5 text-sm text-wrap bg-black border-white text-white rounded-full" style={{ backgroundColor: rank == 1 ? 'brown' : rank == 2 ? 'gray' : rank == 3 ? 'green' : 'black' }} >{rank}</span>
                </div>
                <div className="lg:flex w-full justify-between">
                    <div className="font-semibold text-lg cursor-pointer" onClick={onClick} >{username}</div>
                    <div className="font-semibold text-lg text-gray-600">$ {price}</div>
                </div>
            </div>
        </div>
    )
}
export default RankItem;