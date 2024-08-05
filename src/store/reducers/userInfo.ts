import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";

const initialState = {
    error: null,
    user: {},
    isLoggedIn: false
}

const userInfo = createSlice({
    name: "me",
    initialState,
    reducers: {
        getUserInfo(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        hasError(state, action) {
            state.error = action.payload
        }
    }
})

export default userInfo.reducer;

// Export the async thunk separately
export const getUsersData = () => {
    return async (dispatch: any) => {
        try {
            const response = await instance.get("/users/me");
            console.log(response.data.data);
            dispatch(userInfo.actions.getUserInfo(response.data.data.users));
        } catch (error) {
            dispatch(userInfo.actions.hasError(error instanceof Error ? error.message : "An error occurred"));
        }
    };
};