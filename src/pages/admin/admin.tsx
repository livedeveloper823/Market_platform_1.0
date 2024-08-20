import React from "react";
import TopNavbar from "../../components/TopNavbar";
import Button from "../../components/Button/Button";
import { UserPlusIcon, ArrowLeftIcon, ArrowRightIcon, ChevronsUpDownIcon, PencilIcon, Trash2 } from "lucide-react";
import {
    Chip, Tabs, Tooltip,
} from "@material-tailwind/react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "New",
        value: "newevent",
    },

];

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
];

export default function Admin() {
    const navigate = useNavigate();
    const [pagination, setPagination] = React.useState < number > (1);

    const handleDeleteEvent = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (confirmDelete) {
            alert('Event deleted!');
        }
    };

    // const getItemProps = (index: number) =>
    // ({
    //     variant: pagination === index ? "filled" : "text",
    //     color: "gray",
    //     onClick: () => setPagination(index),
    //     className: "rounded-full",
    // });

    const next = () => {
        if (pagination === 5) return;

        setPagination(pagination + 1);
    };

    const prev = () => {
        if (pagination === 1) return;

        setPagination(pagination - 1);
    };

    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="flex justify-center">

                <div className="mt-36 flex w-full lg:px-[18vw] border-2 md:px-[12vw] sm:px-[4vw] gap-4">
                    <div className=" w-full ">
                        <div className="rounded-none">
                            <div className="flex mb-8 items-center justify-between gap-8">
                                <div className="">
                                    <p className="text-xl">
                                        Event list
                                    </p>
                                    <p color="gray" className="mt-1 font-normal">
                                        See information about all events
                                    </p>
                                </div>
                                <div className="flex  shrink-0 flex-col gap-2 sm:flex-row">

                                    <Button onClick={() => { navigate('addevent') }} className="flex rounded-md px-2 py-1 bg-white border border-gray-400  items-center gap-3" text="All" />
                                    <Button onClick={() => { navigate('addevent') }} className="flex rounded-full px-2 py-1 bg-white border border-gray-400  items-center gap-3" text="Add Event" icon={<UserPlusIcon strokeWidth={2} className="h-4 w-4" />} />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between gap-4 md:flex-row px-4">
                                <Tabs value="all" className="flex flex-col w-full md:w-max ">
                                    <div className="flex">
                                        {TABS.map(({ label, value }) => (
                                            <div key={value} className="flex gap-3 w-full   "  >
                                                <Button className="bg-white w-full text-black border border-gray-400 items-center px-6 rounded-md " text={label} />
                                            </div>
                                        ))}
                                    </div>
                                </Tabs>

                                <div className="flex gap-2 border-2 rounded-full px-2 py-2">
                                    <SearchIcon color="black" />
                                    <input type="text" className="w-full outline-none" placeholder="Search events" />
                                </div>
                            </div>
                        </div>
                        <div className="  overflow-scroll px-0">
                            <table className="mt-4 w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head, index) => (
                                            <th
                                                key={head}
                                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                            >
                                                <p className="flex items-center justify-between gap-2 font-normal leading-none opacity-70" >
                                                    {head}{" "}
                                                    {index !== TABLE_HEAD.length - 1 && (
                                                        <ChevronsUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                                    )}
                                                </p>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TABLE_ROWS.map(
                                        ({ img, name, email, job, org, online, date }, index) => {
                                            const isLast = index === TABLE_ROWS.length - 1;
                                            const classes = isLast
                                                ? "p-4"
                                                : "p-4 border-b border-blue-gray-50";

                                            return (
                                                <tr key={name}>
                                                    <td className={classes}>
                                                        <div className="flex items-center gap-3">
                                                            <img src={img} alt={name} />
                                                            <div className="flex flex-col">
                                                                <p className="font-normal"  >
                                                                    {name}
                                                                </p>
                                                                <p className="font-normal opacity-70"  >
                                                                    {email}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="flex flex-col">
                                                            <p className="font-normal" >
                                                                {job}
                                                            </p>
                                                            <p className="font-normal opacity-70"   >
                                                                {org}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="w-max">
                                                            <Chip
                                                                variant="ghost"
                                                                size="sm"
                                                                value={online ? "online" : "offline"}
                                                                color={online ? "green" : "blue-gray"}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <p className="font-normal" >
                                                            {date}
                                                        </p>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="flex gap-5">
                                                            <Tooltip content="Edit Event">
                                                                <Button icon={<PencilIcon className="h-4 w-4" />} onClick={() => { alert('ddd') }} />
                                                            </Tooltip>
                                                            <Tooltip content="Delete Event">
                                                                <Button icon={<Trash2 className="h-4 w-4" />} onClick={handleDeleteEvent} />
                                                            </Tooltip>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        },
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-center border-t border-blue-gray-50 p-4">
                            <Button
                                className="flex items-center gap-2 rounded-full border-2 p-2 hover:text-white hover:bg-gray-500 outline-none"
                                onClick={prev}
                                // disabled={pagination === 1}
                                icon={<ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />}
                                text="Previous"
                            />
                            <div className="flex items-center gap-2">
                                ---1234--
                            </div>
                            <Button

                                className="flex items-center gap-2 rounded-full border-2 p-2 hover:text-white hover:bg-gray-500 outline-none"
                                onClick={next}
                                // disabled={pagination === 5}
                                icon={<ArrowRightIcon strokeWidth={2} className="h-4 w-4" />}
                                text="Next"
                            />
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}

