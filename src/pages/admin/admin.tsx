import React from "react";
import TopNavbar from "../../components/TopNavbar";
import { UserPlusIcon, ArrowLeftIcon, ArrowRightIcon, ChevronsUpDownIcon, PencilIcon, Trash2 } from "lucide-react";
import {
    Card, CardHeader, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, Tooltip,
} from "@material-tailwind/react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
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
            // Proceed with the deletion logic here
            alert('Event deleted!'); // Replace this with your delete logic
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
        <div className="">
            <TopNavbar />
            <div className="flex justify-center">
                {/* <div className="   "> */}
                <div className=" flex w-full lg:px-[18vw] border-2 md:px-[12vw] sm:px-[4vw] gap-4">
                    <Card className=" w-full ">
                        <CardHeader floated={false} shadow={false} className="rounded-none">
                            <div className="flex mb-8 items-center justify-between gap-8">
                                <div>
                                    <Typography variant="h5" color="blue-gray">
                                        Event list
                                    </Typography>
                                    <Typography color="gray" className="mt-1 font-normal">
                                        See information about all events
                                    </Typography>
                                </div>
                                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                                    <Button variant="outlined" size="sm">
                                        view all
                                    </Button>
                                    <Button onClick={() => { navigate('addevent') }} className="flex bg-gray-400 items-center gap-3" size="sm">
                                        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add event
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between gap-4 md:flex-row px-4">
                                <Tabs value="all" className="flex w-full md:w-max ">
                                    <TabsHeader>
                                        {TABS.map(({ label, value }) => (
                                            <Tab key={value} value={value}>
                                                <Button style={{ textTransform: 'none' }} className="bg-gray-500 items-center p-2 " >{label}</Button>
                                            </Tab>
                                        ))}
                                    </TabsHeader>
                                </Tabs>
                                {/* <div className="flex w-full md:w-72"> */}
                                <div className="flex gap-2 border-2 rounded-full px-2">
                                    <SearchIcon color="black" />
                                    <input type="text" className="w-full outline-none" placeholder="Search events" />
                                </div>
                                {/* </div> */}
                            </div>
                        </CardHeader>
                        <CardBody className="  overflow-scroll px-0">
                            <table className="mt-4 w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head, index) => (
                                            <th
                                                key={head}
                                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                            >
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                                >
                                                    {head}{" "}
                                                    {index !== TABLE_HEAD.length - 1 && (
                                                        <ChevronsUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                                    )}
                                                </Typography>
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
                                                            <Avatar src={img} alt={name} size="sm" />
                                                            <div className="flex flex-col">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal"
                                                                >
                                                                    {name}
                                                                </Typography>
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal opacity-70"
                                                                >
                                                                    {email}
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="flex flex-col">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {job}
                                                            </Typography>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal opacity-70"
                                                            >
                                                                {org}
                                                            </Typography>
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
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {date}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Tooltip content="Edit Event">
                                                            <Button variant="text" onClick={() => { alert('ddd') }} >
                                                                <PencilIcon className="h-4 w-4" />
                                                            </Button>
                                                        </Tooltip>
                                                        <Tooltip content="Delete Event">
                                                            <Button variant="text" onClick={handleDeleteEvent} >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </Tooltip>

                                                    </td>

                                                </tr>
                                            );
                                        },
                                    )}
                                </tbody>
                            </table>
                        </CardBody>

                        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
                            <Button
                                variant="text"
                                className="flex items-center gap-2 rounded-full border-2 p-2 hover:text-white hover:bg-gray-500 outline-none"
                                onClick={prev}
                                disabled={pagination === 1}
                            >
                                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                            </Button>
                            <div className="flex items-center gap-2">
                                ---1234--
                            </div>
                            <Button
                                variant="text"
                                className="flex items-center gap-2 rounded-full border-2 p-2 hover:text-white hover:bg-gray-500 outline-none"
                                onClick={next}
                                disabled={pagination === 5}
                            >
                                Next
                                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

            </div >
        </div >
    );
}

