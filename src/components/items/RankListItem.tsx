import HolderCard from "../cards/HolderCard";
import { ChartNoAxesColumnIncreasing, Banknote } from "lucide-react";

const RankListItem = () => {
    return (
        <div className=" text-textColor bg-cardBg flex w-full justify-between gap-4">
            <HolderCard  first="Voume" icon={<ChartNoAxesColumnIncreasing color="blue" strokeWidth={2} size={32} />} />
            <HolderCard second="Profit" icon={<Banknote color="red" strokeWidth={2} size={32} />} />
        </div>
    );
};
export default RankListItem;

