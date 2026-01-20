import { SET_LANGUAGE } from './MenuComponentActions';

const initialState = {
  language: 'es',
};

const menuComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};

export default menuComponentReducer;
