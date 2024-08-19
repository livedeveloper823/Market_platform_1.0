import { useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";
import { Clock3, Droplet, Sparkles, TrendingUp } from "lucide-react";

const MarketNavbar = () => {
    const navigate = useNavigate()
    return (
        <div className=" ">
            {/* <div className="  "> */}
            <div className="flex justify-between py-2">
                <p className="text-lg font-medium">Browse</p>
                <Button onClick={() => { navigate('/markets') }} style={{ textTransform: "none", color:"blue" }} className="text-sm p-1 items-center outline-none text-blue-500 text-nowrap">View All</Button>
            </div>
            <div className="grid grid-cols-2 gap-2  ">
                <Button onClick={() => { navigate('/markets?_s=start_date:desc') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><Sparkles className="bg-blue-200 rounded-md p-1" />New</Button>
                <Button onClick={() => { navigate('/markets?_s=volume_24hr:desc') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><TrendingUp className="bg-green-200 rounded-md p-1" />Trending</Button>
                <Button onClick={() => { navigate('/markets?_s=liquidity:desc') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><Droplet className="bg-purple-200 rounded-md p-1" />Liquid</Button>
                <Button onClick={() => { navigate('/markets?_s=end_date:asc') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><Clock3 className="bg-yellow-200 rounded-md p-1" />Ending Soon</Button>
            </div>
            <div className="flex justify-between py-2">
                <p className="text-lg font-medium">Topics</p>
            </div>
            <div className="grid grid-cols-2 gap-2  ">
                <Button onClick={() => { navigate('/markets/politics/middle-east') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><Sparkles className="bg-blue-200 rounded-md p-1" />Middle East</Button>
                <Button onClick={() => { navigate('/markets/politics') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-500 text-slate-400 text-nowrap"><TrendingUp className="bg-green-200 rounded-md p-1" />Politics</Button>
                <Button onClick={() => { navigate('/markets/crypto') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-500 text-slate-400 text-nowrap"><Droplet className="bg-purple-200 rounded-md p-1" />Crypto</Button>
                <Button onClick={() => { navigate('/markets/sports') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><Clock3 className="bg-yellow-200 rounded-md p-1" />Sports</Button>
                <Button onClick={() => { navigate('/markets/pop-culture') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><Clock3 className="bg-yellow-200 rounded-md p-1" />Pop Culture</Button>
                <Button onClick={() => { navigate('/markets/science') }} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-4 items-center outline-none border border-gray-300 text-slate-400 text-nowrap"><Clock3 className="bg-yellow-200 rounded-md p-1" />Science</Button>
            </div>
            {/* </div> */}

        </div>
    )
}
export default MarketNavbar;


// <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">