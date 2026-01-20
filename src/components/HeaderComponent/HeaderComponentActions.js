export const SET_ACTIVITY = "SET_ACTIVITY"

export const setActivityAction = (activity) => {
    return {
        type: SET_ACTIVITY,
        payload: {
            activity
        }
    }
}