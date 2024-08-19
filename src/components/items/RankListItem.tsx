import HolderCard from "../cards/HolderCard";
import {
    ChartNoAxesColumnIncreasing,
    Banknote,
} from "lucide-react";

const RankListItem = () => {
    return (
        <div className="flex justify-between gap-4">
            <HolderCard first="Voume" icon={<ChartNoAxesColumnIncreasing color="blue" strokeWidth={2} size={28} />} />
            <HolderCard second="Profit" icon={<Banknote color="red" strokeWidth={2} size={32} />} />
        </div>
    );
};

export default RankListItem;

