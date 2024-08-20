import Logo from "./Logo";
import SocialLink from "./SocialLink";

const Footer = () => {
    return (
        <div className=" flex w-full flex-col  bg-fuchsia-900 text-white border-red-400">
            <div className=" md:flex flex-none mt-10 px-4 py-5 justify-between text-1xl h-[400px]"  >
                <div className=" ">
                    <Logo />
                    <h1>The world's largest prediction market.</h1>
                </div>

                <div className="flex ">
                    <div className="flex flex-col text-1xl gap-2 ">
                        <p className="text-2xl font-bold">Markets</p>
                        <p>Politics </p>
                        <p>Crypto </p>
                        <p>Sports </p>
                        <p>Middle East </p>
                        <p>Pop Culture </p>
                        <p>Business </p>
                        <p>Science </p>
                        <p>All </p>
                    </div>
                    <div className="flex flex-col text-1xl gap-2 ml-20">
                        <p className="text-2xl font-bold">Resources</p>
                        <p>Contact </p>
                        <p>Learn </p>
                        <p>Developers </p>
                        <p>Blog </p>

                    </div>
                    <div className="flex flex-col text-1xl gap-2 ml-20">
                        <p className="text-2xl font-bold">Join the community</p>
                        <SocialLink border={false} />
                    </div>
                </div>
            </div>

            <div className=" flex items-center justify-between px-4">
                <div className="">
                    <h1>Adventure One QSS Inc. © 2024</h1>
                </div>
                <div className="flex gap-4">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;