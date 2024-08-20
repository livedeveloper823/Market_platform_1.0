import React from "react";
import CommentListItem from "../items/CommentListItem";
import ActivityListItem from "../items/ActivityListItem";
import TopHolderListItem from "../items/TopHolderListItem";
import RelatedListItem from "../items/RelatedListItem";
import Button from "../Button/Button";

const EventInfoList = () => {
    const [selectPanel, setSelectPanel] = React.useState < string > ('comment')
    const handleTabs = (value: string) => {
        setSelectPanel(value);
    };

    const data = [
        {
            label: "Comments",
            value: "comment",
            desc: <CommentListItem />
        },
        {
            label: "Top Holders",
            value: "topholders",
            desc: <TopHolderListItem />
        },
        {
            label: "Activity",
            value: "activity",
            desc: <ActivityListItem />
        },
        {
            label: "Related",
            value: "relate",
            desc: <RelatedListItem />,
        },

    ];
    return (
        <div className="w-full">
            <div className="flex">
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
                    <div key={item.value} className="w-full mt-3">
                        {item.desc}
                    </div>
                )
            ))}
        </div>
    )
}

export default EventInfoList;