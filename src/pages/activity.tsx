import React from "react";
import TopNavbar from "../components/layouts/TopNavbar";
import MobileFooter from "../components/layouts/MobileFooter";

import ActivityListItem from "../components/eventInfo/ActivityListItem";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";

const Acticity = () => {

    React.useEffect(() => {
        dispatch(getUsersData())
    }, [])
    return (
        <div className="bg-bgColor h-screen overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="flex mt-36 justify-center ">
                <div className="flex w-[60rem] flex-col gap-4 ">
                    {/* <div className="lg:px-[22vw]  sm:w-full sm:px-2  gap-2 justify-center"> */}
                    <ActivityListItem />
                </div>
            </div>
            <MobileFooter />
        </div >
    )
}

export default Acticity;