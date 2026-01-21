import { SET_PORTFOLIO_LOCATION } from './PortfolioPageActions';

const initialState = {
  portfolioLocation: 'main',
};

const portfolioPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORTFOLIO_LOCATION:
      return {
        ...state,
        portfolioLocation: action.payload.location,
      };
    default:
      return state;
  }
};

export default portfolioPageReducer;
