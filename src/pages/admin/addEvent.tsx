import React from 'react'
import Button from '../../components/Button/Button'
import Datepicker from 'react-tailwindcss-datepicker'
import { CloudUpload, } from 'lucide-react'
import Select from 'react-select'
import TopNavbar from '../../components/TopNavbar'
import useNotification from '../../hooks/useNotification'
import { useNavigate } from 'react-router-dom'
import { dispatch } from '../../store'
import { addEvent } from '../../store/reducers/events'

import { DateValue, handleDateValue } from '../../types/datePicker'


const AddEvent = () => {
    const navigate = useNavigate()

    const { showNotification } = useNotification()
    // const [selectedOption, setSelectedOption] = React.useState < string > ('')
    const [isMulti, setIsMulti] = React.useState < boolean > (false)

    const [dateValue, setDateValue] = React.useState < DateValue > ({ startDate: null, endDate: null });
    const [eventData, setEventData] = React.useState({
        category: "",
        eventName: "",
        volume: "",
        desc: "",
        startDate: dateValue.startDate,
        endDate: dateValue.endDate,
        avatar: "",
        marketName: "",
        marketDesc: "",
    })

    const handleValueChange = (newValue: handleDateValue) => {
        alert(newValue.startDate);
        setDateValue(newValue);
    };
    const options = [
        { value: 'politics', label: 'Politics' },
        { value: 'crypto', label: 'Crypto' },
        { value: 'sports', label: 'Sports' },
        { value: 'popcul', label: 'Pop Culture' },
        { value: 'business', label: 'Business' },
        { value: 'science', label: 'Science' },
    ]

    const handleApplyEvent = () => {
        if (!eventData.eventName || !eventData.volume || !eventData.desc) {
            showNotification("Incorrect Input Data!", "error")

        } else {
            dispatch(addEvent(eventData))
            console.log(eventData)
            showNotification("Successfully!", "success")
        }
    }
    {/* <div className="lg:px-[18vw] md :px-[6vw] sm:px-8 px-4 w-full  flex-col  border border-red-800 pt-8 pb-4 font-semibold"> */ }
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-blue-200">
            <TopNavbar />
            <div className="  mt-36 xl:px-[24vw] md:px-[18vw] sm:px-4  items-center ">
                <div className='flex flex-col gap-4 px-8 py-4 bg-white border border-red-800 rounded-md'>

                    <div className='flex gap-8 items-center'>
                        <div className='flex w-full flex-col '>
                            <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                Event Name
                            </p>
                            <input
                                name="title"
                                type="text"
                                value={eventData.eventName}
                                placeholder="Input title here ..."
                                onChange={(e) => setEventData({ ...eventData, eventName: e.target.value })}
                                className="p-2 rounded-md shadow-sm border border-gray-500 focus:border-gray-800 "
                            />
                        </div>

                        <div className='flex w-56 flex-col'>
                            <p className='flex pb-1 text-lg font-semibold text-gray-900'>
                                Type
                            </p>
                            <Select
                                isSearchable={false}
                                options={options}
                                onChange={(option) => {
                                    if (option) { // Check if option is not null
                                        setEventData({ ...eventData, category: option.label });
                                    }
                                }}
                                value={eventData.category ? options.find(option => option.value === eventData.category) : null}
                            />

                        </div>
                    </div>

                    <div className='flex gap-4 '>
                        <div className='flex w-full flex-col'>
                            <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                Description
                            </p>
                            <textarea
                                name="value"
                                value={eventData.desc}
                                placeholder="Description here ..."
                                onChange={(e) => setEventData({ ...eventData, desc: e.target.value })}
                                className="h-52  p-2 rounded-md shadow-sm border border-gray-500 focus:border-gray-800 "
                            />
                        </div>


                        <div className='flex flex-col w-96 gap-2'>
                            <div className='flex flex-col'>
                                <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                    Betting Period
                                </p>
                                <div className="border-gray-600 rounded-md border">
                                    {/* <Datepicker value={dateValue} onChange={() => handleValueChange} /> */}
                                    <Datepicker value={dateValue} onChange={ () => handleValueChange  } />
                                </div>
                            </div>

                            <div className='flex gap-3  '>
                                <div className='flex w-24 flex-col'>
                                    <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                        Volume
                                    </p>
                                    <input
                                        name="value"
                                        type="number"
                                        value={eventData.volume}
                                        onChange={(e) => setEventData({ ...eventData, volume: e.target.value })}
                                        className="flex  p-2 rounded-md shadow-sm border border-gray-500 focus:border-gray-800 "
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                        Avatar
                                    </label>
                                    <div className="flex w-full items-center pl-2 rounded-md shadow-smborder border-gray-500 focus:border-gray-800 ">
                                        <CloudUpload type='file' />
                                        <input
                                            id="avatarInput"

                                            name="avatar"
                                            type="file"
                                            placeholder="Input Field here ..."
                                            onChange={(e) => {
                                                setEventData({ ...eventData, avatar: e.target.value })
                                            }}
                                            className=" flex border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* {value.startDate}
                    {value.endDate} */}
                    <label className='flex pb-1 font-semibold text-gray-900 '>
                        Single Events
                    </label>
                    <div className='flex flex-col gap-1 pl-4'>
                        <div className="flex w-full gap-2 pl-2 rounded-md shadow-sm ">
                            <input
                                id="singleRadio"
                                name="title"
                                type="radio"
                                defaultChecked
                                onChange={() => setIsMulti(false)}
                            />
                            <label htmlFor="title" className="flex font-semibold text-gray-900 ">
                                Single Events
                            </label>
                        </div>

                        <div className="flex w-full gap-2 pl-2 rounded-md shadow-sm ">
                            <input
                                id="multiRadio"
                                name="title"
                                type="radio"
                                onChange={() => setIsMulti(true)}
                            />
                            <label htmlFor="title" className="flex font-semibold text-gray-900 ">
                                Multiple Events
                            </label>
                        </div>
                        {/* </div> */}
                    </div>
                    {isMulti == true
                        ? (
                            <div className="flex w-full font-semibold gap-6">
                                <div className="flex w-full flex-col font-semibold">
                                    <label className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                        Market Name
                                    </label>
                                    <div className="flex w-full rounded-md shadow-sm border border-gray-500 focus:border-gray-800 ">
                                        <input
                                            id="percent"
                                            name="percent"
                                            type="text"
                                            placeholder="Input Field here ..."
                                            autoComplete="percent"
                                            onChange={(e) => { setEventData({ ...eventData, marketName: e.target.value }) }}
                                            className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col font-semibold">
                                    <label className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                        Market Description
                                    </label>
                                    <div className="flex w-full rounded-md shadow-sm border border-gray-500 focus:border-gray-800 ">
                                        <input
                                            id="percent"
                                            name="percent"
                                            type="text"
                                            placeholder="Input Field here ..."
                                            autoComplete="percent"
                                            onChange={(e) => { setEventData({ ...eventData, marketDesc: e.target.value }) }}
                                            className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                                        />
                                    </div>
                                </div>
                            </div>

                        )
                        : "Single"}
                </div>
                <div className='flex justify-center p-3 gap-6 pt-6'>
                    <Button text='Cancel' value='eventCancel' className='flex px-3 py-2 bg-gray-300 text-black items-center hover:bg-blue-300 rounded-md' onClick={() => navigate('/admin', { replace: true })} />
                    <Button text='Apply' value='eventSave' className='flex px-5 py-2 bg-blue-700 text-white items-center hover:bg-blue-300 rounded-md' onClick={() => handleApplyEvent()} />
                </div>
            </div >
        </div >

    )
}

export default AddEvent;