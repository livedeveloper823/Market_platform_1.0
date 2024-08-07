import React, { useEffect } from "react";
import { content } from "../contents/landing";
import Button from "./Button";
import { SearchIcon } from "./icons";
import SignInModal from "./SignInModal";
import { dispatch, useSelector } from "../store";
import { getUserData } from "../store/reducers/userInfo";
import useAuth from "../hooks/useAuth";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	// Variables
	const [inOpen, setInOpen] = React.useState(false);
	const [upOpen, setUpOpen] = React.useState(false);

	// Getting Data
	const firstName = useSelector((state) => state.userInfo.user.firstName)
	const lastName = useSelector((state) => state.userInfo.user.lastName)
	const userrole = useSelector((state) => state.userInfo.user.role)

	// Use hooks
	const { isLoggedIn, logout } = useAuth();
	const navigate = useNavigate()

	// Dropdown menu
	const [open, setOpen] = React.useState<boolean>(false);
	const ref = React.useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: MouseEvent) => {
		// Check if the click was outside the dropdown
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		// Add event listener for mouse down events
		document.addEventListener('mousedown', handleClickOutside);

		// Cleanup function to remove the event listener
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Open SignInModal, Logout
	const handleInClick = () => {
		setInOpen(!inOpen);
	};
	const handleUpClick = () => {
		setUpOpen(!upOpen);
	};
	const handleLogout = () => {
		logout()
		setOpen(false)
	}

	useEffect(() => {
		dispatch(getUserData())
	}, [])

	return (
		<div>
			<div className="flex justify-between items-center px-5 py-2">
				<SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
				<SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />
				<div className="flex w-[50vw] gap-5 px-2 py-1 items-center border border-gray-700 rounded-lg">
					<SearchIcon color="black" />
					<input type="text" className="w-full outline-none" placeholder="Search markets" />
				</div>
				<div className="flex gap-6 items-center">
					<div className="flex gap-2">
						{content.iconBtns.map((item, index) =>
							<Button key={index} text={item.text} value={item.value} icon={<item.icon />} onClick={() => { }} className="flex flex-col items-center text-gray-600 hover:text-black text-xs hover:bg-gray-300  rounded-sm px-2 py-1" />)}
					</div>
					{isLoggedIn ?
						<div className="flex gap-3">
							<div className="text-center text-sm">
								<p className="text-green-500">$0.00</p>
								<p>Portfolio</p>
							</div>
							<div className="text-center text-sm">
								<p className="text-green-500">$0.00</p>
								<p>Cash</p>
							</div>
							<div ref={ref} className="flex items-center">
								<div className="flex items-center" onClick={() => {
									setOpen(((prev) => !prev));
								}} >
									<img src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="avatar" className="w-7 rounded-full" />
									{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
								</div>
								{open &&
									<div className="bg-white absolute top-16 right-[1vw] rounded-md border-2 border-gray-200 shadow-md">
										<div className="flex items-center gap-2 px-6 py-3">
											<img src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="avatar" className="w-8 rounded-full" />
											<p className="font-bold">{firstName}{lastName}</p>
										</div>
										<hr />
										<div className="flex flex-col gap-2 px-1 py-3 text-start">
											{userrole == "admin" ? <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => navigate("/admin")}>Admin Page</div> : ""}
											<div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => navigate("/profile")}>Profile</div>
											<div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">Settings</div>
											<div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">Learn</div>
											<div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">Documentation</div>
										</div>
										<hr />
										<div className="flex flex-col gap-2 px-1 py-3 text-start">
											<div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => handleLogout()}>Logout</div>
										</div>
									</div>}
							</div>
						</div>
						:
						<div className="flex gap-3">
							<Button text="Log In" value="login" className="text-blue-700 hover:bg-gray-300 px-3 py-1 rounded-md" onClick={handleInClick} icon />
							<Button text="Sign Up" value="signup" className="bg-blue-700 hover:bg-blue-600 text-white px-3 rounded-md" onClick={handleUpClick} icon />
						</div>}
				</div>
			</div>
			{/* Navigates */}
			<div className="flex gap-3">
				{
					content.menuBtns.map((item, index) => <Button key={index} text={item.text} value={item.value} onClick={() => { }} className="px-2 py-1 border-b-2 border-white hover:border-b-gray-500 focus:border-b-black rounded-sm" icon />)
				}
			</div>
		</div>
	)
}

export default Navbar;