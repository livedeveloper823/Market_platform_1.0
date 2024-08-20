import TopNavbar from "../components/TopNavbar";
const WatchList = () => {
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="flex mt-36 justify-center p-4 space-x-4">
                Hi, here is WatchList Page.
            </div>
        </div>
    )
}

export default WatchList;