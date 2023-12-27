import {configureStore} from "@reduxjs/toolkit";
import {priceListReducer} from "./slices";

const store = configureStore({
    reducer: {
        priceList: priceListReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})

export {
    store
}