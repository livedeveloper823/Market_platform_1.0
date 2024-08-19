import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import PositionListItem from "../items/PositionListItem"
import AcitiveListItem from "../items/ProfileAcitiveListItem";

export default function ProfileInfoList() {
    const [activeTab, setActiveTab] = React.useState < string > ('position');
    const data = [
        {
            label: "Positions",
            value: "position",
            desc: <PositionListItem />
        },
        {
            label: "Activity",
            value: "activity",
            desc: <AcitiveListItem />,
        },

    ];
    return (
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="w-24 justify-start rounded-none border-b border-gray-300 bg-transparent p-0"
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
                            className={activeTab === value ? "border-b-2 border-black font-semibold text-lg text-gray-900" : "font-semibold text-lg text-gray-500"}
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

