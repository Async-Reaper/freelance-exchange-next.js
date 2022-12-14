import {createSlice} from "@reduxjs/toolkit";
import {IFetch} from "../../../models/IFetch";


const initialState: IFetch = {
    loading: false,
    success: false,
    successText: '',
    error: false,
    errorText: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserDataFetch(state) {
            state.loading = true;
            state.success = false;
            state.successText = '';
            state.error = false;
            state.errorText = '';
        },

        getUserDataSuccess(state) {
            state.loading = false;
            state.success = true;
            state.successText = '';
            state.error = false;
        },

        getUserDataError(state, action) {
            state.loading = false;
            state.success = false;
            state.error = true;
            state.errorText = action.payload ? action.payload : 'Произошла ошибка, повторите попытку позже';
        },
    }
})

export default userSlice.reducer;
export const {getUserDataFetch, getUserDataSuccess, getUserDataError} = userSlice.actions