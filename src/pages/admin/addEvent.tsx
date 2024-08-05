const AddEvent = () => {
    return (
        <div className="mx-40 my-20">
            <p className="text-5xl font-bold">Add Events</p>
            <hr />
            <div className="flex justify-center my-10">
                <label htmlFor="title" className="flex items-center gap-5 w-full text-2xl font-semibold">
                    Event Title:
                    <input type="text" name="title" placeholder="Input Event title here ..." className="w-full border border-gray-500 px-4 py-1 rounded-md" />
                </label>
            </div>
        </div>
    )
}

export default AddEvent;