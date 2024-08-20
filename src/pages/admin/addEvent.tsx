import React from 'react'
import Button from '../../components/Button/Button'
import { CloudUpload, } from 'lucide-react'
import TopNavbar from '../../components/TopNavbar'
import useNotification from '../../hooks/useNotification'
import { useNavigate } from 'react-router-dom'
import { dispatch } from '../../store'
import { addEvent } from '../../store/reducers/events'

const AddEvent = () => {
    const navigate = useNavigate()

    const { showNotification } = useNotification()
    const [isMulti, setIsMulti] = React.useState < boolean > (false)
    const [eventData, setEventData] = React.useState({
        title: "",
        volume: "",
        desc: "",
        startDate: new Date(),
        endDate: 0,
        avatar: "",
    })
    const handleApplyEvent = () => {
        if (!eventData.title || !eventData.volume || !eventData.desc) {
            showNotification("Incorrect Input Data!", "error")
        } else {
            dispatch(addEvent(eventData))
            console.log(eventData)
            showNotification("Successfully!", "success")
        }
    }
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="flex mt-36 justify-center">
                {/* <div className="lg:px-[18vw] md:px-[6vw] sm:px-8 px-4 w-full  flex-col  border-2 border-red-800 pt-8 pb-4 font-semibold"> */}
                <div className='   '>
                    <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                        Event Title
                    </p>
                    <input
                        name="title"
                        type="text"
                        value={eventData.title}
                        placeholder="Input title here ..."
                        onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                        className="flex w-full py-2 h-full rounded-md shadow-sm ring-1  ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                    />

                    <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                        Volume
                    </p>
                    <input
                        name="value"
                        type="number"
                        value={eventData.volume}
                        placeholder="Input title here ..."

                        onChange={(e) => setEventData({ ...eventData, volume: e.target.value })}
                        className="flex w-full py-2 h-full rounded-md shadow-sm ring-1  ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                    />
                    <p className='flex pb-1 text-lg font-semibold text-gray-900 '>
                        Description
                    </p>
                    <textarea
                        name="value"
                        value={eventData.desc}
                        placeholder="Description here ..."
                        onChange={(e) => setEventData({ ...eventData, desc: e.target.value })}
                        className="flex w-full py-2 h-full rounded-md shadow-sm ring-1  ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                    />

                    <label className='flex pb-1 text-lg font-semibold text-gray-900 '>
                        Avatar
                    </label>
                    <div className="flex w-full items-center pl-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <CloudUpload />
                        <input
                            id="avatarInput"
                            name="avatar"
                            type="file"
                            placeholder="Input Field here ..."
                            onChange={(e) => { setEventData({ ...eventData, avatar: e.target.value }) }}
                            className="flex border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                        />
                    </div>

                    <label className='flex pb-1 font-semibold text-gray-900 '>
                        Which method you to choose?
                    </label>
                    <div className='flex flex-col gap-1 pl-4'>
                        <div className="flex w-full gap-2 pl-2 rounded-md shadow-sm sm:max-w-md">
                            <input
                                id="singleRadio"
                                name="title"
                                type="radio"
                                defaultChecked
                                onChange={() => setIsMulti(false)}
                            />
                            <label htmlFor="title" className="flex font-semibold text-gray-900 ">
                                Single
                            </label>
                        </div>

                        <div className="flex w-full gap-2 pl-2 rounded-md shadow-sm sm:max-w-md">
                            <input
                                id="multiRadio"
                                name="title"
                                type="radio"
                                onChange={() => setIsMulti(true)}
                            />
                            <label htmlFor="title" className="flex font-semibold text-gray-900 ">
                                Multiple
                            </label>
                        </div>
                        {/* </div> */}
                    </div>
                    {isMulti == true
                        ? (
                            <div className="flex flex-col font-semibold">
                                <label className='flex pb-1 text-lg font-semibold text-gray-900 '>
                                    Extra
                                </label>
                                <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="percent"
                                        name="percent"
                                        type="text"
                                        placeholder="Input Field here ..."
                                        autoComplete="percent"
                                        // onChange={(e) => { setEventData({ ...eventData, percent: e.target.value }) }}
                                        className="flex border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
                                    />
                                </div>

                            </div>

                        )
                        : "Single"}
                </div>

            </div >
            <hr />
            <div className='flex justify-center p-3 gap-6 pt-6'>
                <Button text='Cancel' value='eventCancel' className='flex px-3 py-2 bg-gray-300 text-black items-center hover:bg-blue-300 rounded-md' onClick={() => navigate('/admin', { replace: true })} />
                <Button text='Apply' value='eventSave' className='flex px-5 py-2 bg-blue-700 text-white items-center hover:bg-blue-300 rounded-md' onClick={() => handleApplyEvent()} />
            </div>
        </div >

    )
}

export default AddEvent;