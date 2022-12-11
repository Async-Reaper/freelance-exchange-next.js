import {createSlice} from "@reduxjs/toolkit";
import {IFetch} from "../../../models/IFetch";

interface ILogin extends IFetch {
    loginStatus: boolean;
}

const initialState: ILogin = {
    loading: false,
    success: false,
    successText: '',
    error: false,
    errorText: '',
    loginStatus: false
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
            state.loginStatus = true;
        },

        loginError(state, action?) {
            state.loading = false;
            state.success = false;
            state.error = true;
            state.errorText = action.payload ? action.payload : 'Произошла ошибка, повторите попытку позже';
        },

        setLoginStatus(state, action) {
            state.loginStatus = action.payload;
        }
    }
})

export default loginSlice.reducer;
export const {loginFetch, loginSuccess, loginError, setLoginStatus} = loginSlice.actions;