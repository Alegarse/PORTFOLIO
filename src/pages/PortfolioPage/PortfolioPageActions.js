export const SET_PORTFOLIO_LOCATION = "SET_PORTFOLIO_LOCATION"

export const setPortfolioLocation = (location) => {
    return {
        type: SET_PORTFOLIO_LOCATION,
        payload: {
            location
        }
    }
}