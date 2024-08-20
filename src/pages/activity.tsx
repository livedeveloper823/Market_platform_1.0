import React from "react";
import TopNavbar from "../components/TopNavbar";
import ActivityListItem from "../components/items/ActivityListItem";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import MobileFooter from "../components/MobileFooter";

const Acticity = () => {

    React.useEffect(() => {
        dispatch(getUsersData())
    }, [])
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="flex mt-36 justify-center ">
                <div className="lg:px-[22vw]  sm:w-full sm:px-2  gap-2 justify-center">
                    <ActivityListItem />
                </div>
            </div>
            <MobileFooter />
        </div >
    )
}

export default Acticity;