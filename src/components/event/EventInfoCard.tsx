import React from "react";
import Button from "../Button/Button";
import BuySell from "../cards/BuySell";

const EventInfoCard = () => {
    const [selectPanel, setSelectPanel] = React.useState<string>('buy')
    const handleTabs = (value: string) => {
        setSelectPanel(value);
    };

    const data = [
        {
            label: "Buy",
            value: "buy",
            desc: <BuySell activeTab={"buy"} />,
        },
        {
            label: "Sell",
            value: "sell",
            desc: <BuySell activeTab={"sell"} />
        },

    ];
    return (
        <div className="fixed border-2 rounded-lg ">
            <div className="flex px-2">
                {data.map((item, index) => (
                    <Button
                        key={index}
                        text={item.label}
                        value={item.value}
                        onClick={() => { handleTabs(item.value); }}
                        className={`${selectPanel === `${item.value}` ? 'border-b-2 border-black' : 'border-b-2 border-gray-300'}  flex flex-col  font-medium cursor-pointer p-2  hover:border-b-gray-500  text-black text-nowrap`}
                    />

                ))}
            </div>

            {data.map((item) => (
                selectPanel === item.value && (
                    <div key={item.value} className="w-full  px-2 mt-3">
                        {item.desc}
                    </div>
                )
            ))}
        </div>
    )
}

export default EventInfoCard;