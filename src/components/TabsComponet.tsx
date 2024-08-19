import React from 'react';
import { TabsProps, TabProps } from '../types/tab';

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = React.useState < string > (children[0].props.label);

    const handleClick = (label: string) => {
        setActiveTab(label);
    };

    return (
        <div className=" ">
            <div className="flex ">
                {children.map((child) => (
                    <button
                        key={child.props.label}
                        className={`flex text-gray-700 font-medium px-3 py-2 ${activeTab === child.props.label
                            ? 'border-b-2 border-black'
                            : ''
                            }`}
                        onClick={() => handleClick(child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className=" ">
                {children.map((child) => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const TabContent: React.FC<TabProps> = ({ label, children }) => {
    return (
        <div className="hidden">
            {/* You can use the label for any purpose, such as debugging or rendering */}
            <h3 className="sr-only">{label}</h3> {/* Optional: visually hide the label */}
            {children}
        </div>
    )
};

export { Tabs, TabContent };
