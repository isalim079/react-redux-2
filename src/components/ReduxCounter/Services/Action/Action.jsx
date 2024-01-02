import { DECREMENT, INCREMENT, RESET } from "../Constant/Constant";

// action for increment
export const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

// action for decrement
export const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

// action for reset
export const resetCounter = () => {
    return {
        type: RESET,
    };
};
