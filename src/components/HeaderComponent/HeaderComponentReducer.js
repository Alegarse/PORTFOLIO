import { SET_ACTIVITY } from "./HeaderComponentActions";

const initialState = {
    activity: "portfolio"
}

const headerComponentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ACTIVITY:
            return {
                ...state,
                activity:action.payload.activity
            }
        default:
            return state;
    }
}

export default headerComponentReducer