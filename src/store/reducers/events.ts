import { createSlice } from "@reduxjs/toolkit";
import { eventsStateProps } from "../../types/states";
import { dispatch } from "..";
import instance from "../../utils/axios";

const initialState: eventsStateProps = {
    error: null,
    events: []
}

const events = createSlice({
    name: "events",
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload
        },
        getEventsData(state, action) {
            state.events = action.payload
        }
    }
})

export default events.reducer;

export const getAllEvents = () => {
    return async () => {
        try{
            const response = await instance.get("/events/all")            
            dispatch(events.actions.getEventsData(response.data.data.events))
        } catch(error){
            dispatch(events.actions.hasError(error))
        }
    }
}
