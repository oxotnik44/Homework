import { configureStore } from "@reduxjs/toolkit";
import ListHomeWorkSlice from "./ListHomeWorkSlice";

export const store = configureStore({
    reducer: {
        ListHomeWorkSlice: ListHomeWorkSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch