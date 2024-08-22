import { createSlice } from "@reduxjs/toolkit";
import { eventsStateProps } from "../../types/states";
import { dispatch } from "..";
import instance from "../../utils/axios";

const initialState: eventsStateProps = {
    error: null,
    events: [],
    event:null,
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
        },
        addEventData(state, action) {
            state.events = action.payload
        },
        getEventInfo(state, action) {
            state.event = action.payload
        }
    }
})


export const getAllEvents = () => {
    return async () => {
        try {
            const response = await instance.get("/events/all")
            dispatch(events.actions.getEventsData(response.data.data.events))
        } catch (error) {
            dispatch(events.actions.hasError(error))
        }
    }
}


export const getEventInfo = (pageId: string | null) => {
    return async () => {
        try {
            console.log("ddddddddddddddddddddd", pageId)
            const response = await instance.get(`/events/eventInfo/${pageId}`)
            dispatch(events.actions.getEventInfo(response.data.data.event))
        } catch (error) {
            dispatch(events.actions.hasError(error))
        }
    }
}

export const addEvent = (eventData: { category: string; eventName: string; volume: string; desc: string; startDate: string; endDate: string; avatar: string; marketName: string; marketDesc: string; }) => {
    return async () => {
        try {
            const response = await instance.post("/events/add", eventData)
            dispatch(events.actions.addEventData(response.data.data.eventData))
            console.log("==55555555555>>>", eventData)
        } catch (error) {
            dispatch(events.actions.hasError(error))
        }
    }
}

export default events.reducer;