import { combineReducers } from "redux-immutable";
import { reducer as homeReducer } from "../pages/home/store";
console.log(homeReducer);
const reducer = combineReducers({
    home: homeReducer
});

export default reducer;
