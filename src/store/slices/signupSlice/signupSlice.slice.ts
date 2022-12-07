import {createSlice} from "@reduxjs/toolkit";
import {IFetch} from "../../../models/IFetch";

const initialState: IFetch = {
    loading: false,
    success: false,
    successText: '',
    error: false,
    errorText: ''
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signupFetch(state) {
            state.loading = true;
            state.success = false;
            state.successText = '';
            state.error = false;
            state.errorText = '';
        },

        signupSuccess(state) {
            state.loading = false;
            state.success = true;
            state.successText = 'Регистрация прошла успешно';
            state.error = false;
        },

        signupError(state, action) {
            state.loading = false;
            state.success = false;
            state.error = true;
            state.errorText = action.payload ? action.payload : 'Произошла ошибка, повторите попытку позже';
        },
    }
})

export default signupSlice.reducer;
export const {signupFetch, signupSuccess, signupError} = signupSlice.actions;