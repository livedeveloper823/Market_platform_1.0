import React from "react";
import CommentListItem from "../eventInfo/CommentListItem";
import ActivityListItem from "../eventInfo/ActivityListItem";
import TopHolderListItem from "../eventInfo/TopHolderListItem";
import RelatedListItem from "../eventInfo/RelatedListItem";
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
            <div className="flex gap-4 border-b">
                {data.map((item, index) => (
                    <Button
                        key={index}
                        text={item.label}
                        value={item.value}
                        onClick={() => { handleTabs(item.value); }}
                        className={`${selectPanel === `${item.value}` ? 'border-b-2 text-textColor' : 'text-gray-400'}  flex flex-col text-lg  font-medium cursor-pointer py-2 hover:border-b-2 hover:border-b-gray-500 text-nowrap`}
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