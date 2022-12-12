import {combineReducers, configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice/loginSlice";
import signupSlice from "./slices/signupSlice/signupSlice.slice";

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice
})

export default function setupStore(){
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
