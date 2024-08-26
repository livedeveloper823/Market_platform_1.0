import MobileFooter from "../components/layouts/MobileFooter";
import TopNavbar from "../components/layouts/TopNavbar";
const Election = () => {
    return (
        <div className="bg-bgColor h-screen overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="flex mt-36 justify-center p-4 space-x-4">
                <p className="text-textColor">
                    Hi, here is Election Page.
                </p>
            </div>
            <MobileFooter />
        </div>
    )
}

export default Election;