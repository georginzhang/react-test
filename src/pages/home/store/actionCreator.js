import * as constants from "./constants.js";

export const changeValue = value => ({
    type: constants.CHANGE_VALUE,
    value
});

export const addItem = value => ({
    type: constants.ADD_ITEM,
    value
});
export const deleteItem = index => ({
    type: constants.DELETE_ITEM,
    index
});
