import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    value: "ha",
    list: [1, 2, 3, 4, 5]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_VALUE:
            return state.set("value", action.value);
        case constants.ADD_ITEM:
            let newList = state.get("list").push(action.value);
            return state.merge({
                list: fromJS(newList),
                value: ""
            });
        case constants.DELETE_ITEM:
            let nlist = [...state.get("list")];
            nlist.splice(action.index, 1);
            return state.merge({
                list: fromJS(nlist)
            });
        default:
            return state;
    }
};
