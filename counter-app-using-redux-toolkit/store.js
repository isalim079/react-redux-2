import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./src/features/counter/CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});
export default store;

