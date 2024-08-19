import React from "react";
import CommentListItem from "../items/CommentListItem";
import ActivityListItem from "../items/ActivityListItem";
import TopHolderListItem from "../items/TopHolderListItem";
import RelatedListItem from "../items/RelatedListItem";

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
const EventInfoList = () => {
    const [activeTab, setActiveTab] = React.useState < string > ('comment');
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
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="w-80 text-nowrap justify-start rounded-none border-b border-gray-300 bg-transparent p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "border-b border-blue-700 font-semibold text-lg text-gray-900" : "font-semibold text-lg text-gray-500"}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )
}

export default EventInfoList;