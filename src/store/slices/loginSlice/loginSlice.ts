import {createSlice} from "@reduxjs/toolkit";
import {ILoginSlice} from "./loginSlice.types";

const initialState: ILoginSlice = {
    loading: false,
    success: false,
    successText: '',
    error: false,
    errorText: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginFetch(state) {
            state.loading = true;
            state.success = false;
            state.successText = '';
            state.error = false;
            state.errorText = '';
        },

        loginSuccess(state) {
            state.loading = false;
            state.success = true;
            state.successText = 'Добро пожаловать';
            state.error = false;
        },

        loginError(state, action) {
            state.loading = false;
            state.success = false;
            state.error = true;
            state.errorText = action.payload ? action.payload : 'Произошла ошибка, повторите попытку позже';
        },
    }
})

export default loginSlice.reducer;
export const {loginFetch, loginSuccess, loginError} = loginSlice.actions;