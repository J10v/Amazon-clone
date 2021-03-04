import userEvent from "@testing-library/user-event";

export const initalState = {
    basket: [],
};

functionreducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            //adding item to basket
            break;
        case 'REMOVE_FROM_BASKET' :
            //removing items from basket
            break;
        default:
            return state;
    }
}

export default reducer;