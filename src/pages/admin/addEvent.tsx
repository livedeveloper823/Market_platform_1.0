import React from 'react'
import Button from '../../components/Button/Button'
import Datepicker from 'react-tailwindcss-datepicker'
import { CloudUpload, CheckCircle } from 'lucide-react'
import Select from 'react-select'
import { EventProps, MarketProps } from '../../types'
import TopNavbar from '../../components/layouts/TopNavbar'
import useNotification from '../../hooks/useNotification'
import { useNavigate } from 'react-router-dom'
import { dispatch } from '../../store'
import { addEvent } from '../../store/reducers/events'

import { DateValue, handleDateValue } from '../../types/datePicker'

const AddEvent = () => {
    const navigate = useNavigate()

    const { showNotification } = useNotification()
    const [isMulti, setIsMulti] = React.useState < boolean > (false)

    const [dateValue, setDateValue] = React.useState < DateValue > ({ startDate: null, endDate: null });
    const [eventData, setEventData] = React.useState < EventProps & MarketProps > ({
        category: "",
        eventName: "",
        volume: 0,
        desc: "",
        startDate: dateValue.startDate ?? new Date(),
        endDate: dateValue.endDate ?? new Date(),
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
    const [backgroundImage, setBackgroundImage] = React.useState('');
    const fileInputRef = React.useRef < HTMLInputElement | null > (null);
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            // Set the background image
            if (typeof reader.result === 'string') {
                setBackgroundImage(reader.result);
                setEventData({
                    ...eventData,
                    avatar: reader.result as string,
                });
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleApplyEvent = () => {
        if (!eventData.eventName || !eventData.volume || !eventData.desc) {
            showNotification("Incorrect Input Data!", "error")

        } else {
            dispatch(addEvent(eventData))
            console.log(eventData)
            showNotification("Successfully!", "success")
            navigate('/admin')
        }
    }
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-blue-200">
            <TopNavbar />
            <div className=" mt-36 xl:px-[14vw] md:px-[18vw] sm:px-4  items-center">
                {/* <div className="mt-36 xl:px-[24vw] md:px-[18vw] sm:px-4  items-center "> */}
                <div className='flex flex-col gap-4 px-8 py-4 bg-white rounded-md'>
                    <div className="p-4">
                        <p className="justify-center items-center flex text-3xl">
                            Event Add
                        </p>
                        <hr />
                    </div>
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
                                className="h-full p-2 rounded-md shadow-sm border border-gray-500 focus:border-gray-800 "
                            />
                        </div>


                        <div className='flex flex-col w-2/4 gap-2'>
                            <div className='flex flex-col'>
                                <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                    Betting Period
                                </p>
                                <div className="border-gray-600 rounded-md border">
                                    <Datepicker value={dateValue} onChange={() => handleValueChange} />
                                </div>
                            </div>

                            <div className='flex flex-col gap-3  '>
                                <div className='flex w-24 flex-col'>
                                    <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                        Volume
                                    </p>
                                    <input
                                        name="value"
                                        type="number"
                                        value={eventData.volume}
                                        onChange={(e) => setEventData({ ...eventData, volume: Number(e.target.value) })}
                                        className="flex  p-2 rounded-md shadow-sm border border-gray-500 focus:border-gray-800 "
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                        Avatar
                                    </label>
                                    <div className="flex w-full items-end gap-4 rounded-md shadow-sm border-gray-500 focus:border-gray-800">
                                        <div
                                            className={` flex items-center justify-center w-20 h-20 bg-cover rounded-md border  border-green-300  ${!backgroundImage ? 'bg-green-200' : ''}`}
                                            style={{
                                                backgroundImage: `url(${backgroundImage || ''})`,
                                            }}
                                        >
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className='hidden'
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                        {backgroundImage ? (
                                            <CheckCircle size={42} className="text-green-500" />
                                        ) : (
                                            <CloudUpload size={42} onClick={handleButtonClick} />
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* {value.startDate}
                    {value.endDate} */}
                    <label className='flex text-lg font-semibold text-gray-900 '>
                        Market Add
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
                                Single Market
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
                                Multiple Markets
                            </label>
                        </div>
                        {/* </div> */}
                    </div>
                    {isMulti == true
                        ? (
                            <div className="flex w-full items-center font-semibold gap-6">
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
                                <div className=" flex-col font-semibold">
                                    <label className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                    </label>

                                    <div className='items-end w-8  border'>
                                        <Button className='w-full' text="add" />

                                    </div>
                                </div>
                            </div>

                        )
                        : "Single Market"}
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