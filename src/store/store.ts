import {combineReducers, configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice/loginSlice";

const rootReducer = combineReducers({
    login: loginSlice
})

export default function setupStore(){
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
