import { combineReducers } from "redux";
// import reducers
import users from "./users";
import event from "./event";
import userInfo from "./userInfo";

const reducers = combineReducers({
    users,
    event,
    userInfo
});

export default reducers;