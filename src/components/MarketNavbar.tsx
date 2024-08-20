import { useNavigate } from "react-router";
import Button from "./Button/Button";
import { Clock3, Droplet, Sparkles, TrendingUp } from "lucide-react";

const MarketNavbar = () => {
    const navigate = useNavigate()
    return (
        <div className=" ">
            {/* <div className="  "> */}
            <div className="flex justify-between py-2">
                <p className="text-lg font-medium">Browse</p>
                <Button text="View All" onClick={() => { navigate('/markets') }} className=" text-base font-medium rounded-md p-1 items-center outline-none text-blue-500 text-nowrap"/>
            </div>
            <div className="grid grid-cols-2 gap-2  ">
                <Button onClick={() => { navigate('/markets?_s=start_date:desc') }} text="New" className="w-full  text-xl font-medium rounded-md text-black flex gap-3 items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<Sparkles className="bg-blue-200 rounded-md p-1" />} />
                <Button onClick={() => { navigate('/markets?_s=volume_24hr:desc') }} text="Trending" className="w-full  text-xl font-medium rounded-md text-black flex gap-3 items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<TrendingUp className="bg-green-200 rounded-md p-1" />} />
                <Button onClick={() => { navigate('/markets?_s=liquidity:desc') }} text="Liquid" icon={<Droplet className="bg-purple-200 rounded-md p-1" />} className="w-full  text-xl font-medium rounded-md text-black flex gap-3 items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" />
                <Button onClick={() => { navigate('/markets?_s=end_date:asc') }} className="w-full  text-xl font-medium rounded-md text-black flex gap-3  items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" text="Ending Soon" icon={<Clock3 className="bg-yellow-200 rounded-md p-1" />} />
            </div>
            <div className="flex justify-between py-2">
                <p className="text-lg font-medium">Topics</p>
            </div>
            <div className="grid grid-cols-2 gap-2  ">
                <Button onClick={() => { navigate('/markets/politics/middle-east') }} text="Middle East" className="w-full  text-xl font-medium rounded-md text-black flex gap-3 items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<Sparkles className="bg-blue-200 rounded-md p-1" />} />
                <Button onClick={() => { navigate('/markets/politics') }} text="Politics" className="w-full  text-xl font-medium rounded-md text-black flex gap-3   items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<TrendingUp className="bg-green-200 rounded-md p-1" />} />
                <Button onClick={() => { navigate('/markets/crypto') }} text="Crypto" className="w-full  text-xl font-medium rounded-md text-black flex gap-3 items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<Droplet className="bg-purple-200 rounded-md p-1" />}></Button>
                <Button onClick={() => { navigate('/markets/sports') }} text="Sports" className="w-full  text-xl font-medium rounded-md text-black flex gap-3 items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<Clock3 className="bg-yellow-200 rounded-md p-1" />} />
                <Button onClick={() => { navigate('/markets/pop-culture') }} text="Pop Culture" className="w-full  text-xl font-medium rounded-md text-black flex gap-3  items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<Clock3 className="bg-yellow-200 rounded-md p-1" />} />
                <Button onClick={() => { navigate('/markets/science') }} text="Science" className="w-full  text-xl font-medium rounded-md text-black flex gap-3 items-center outline-none border border-gray-300 px-4 py-3 text-nowrap" icon={<Clock3 className="bg-yellow-200 rounded-md p-1" />} />
            </div>
            {/* </div> */ }

        </div >
    )
}
export default MarketNavbar;


// <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">