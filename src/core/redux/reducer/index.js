import { combineReducers } from 'redux';
import portfolioPageReducer from '../../../pages/PortfolioPage/PortfolioPageReducer';
import menuComponentReducer from '../../../components/MenuComponent/MenuComponentReducer';
import headerComponentReducer from '../../../components/HeaderComponent/HeaderComponentReducer';

const reducer = combineReducers({
  portfolioPageReducer,
  menuComponentReducer,
  headerComponentReducer
});

export default reducer;
