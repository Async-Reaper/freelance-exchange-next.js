import {ILogin} from "../../models/ILogin";
import {AppDispatch} from "../../store/store";
import {loginError, loginFetch, loginSuccess} from "../../store/slices/loginSlice/loginSlice";
import {getAuth, signInWithEmailAndPassword} from "@firebase/auth";

export const loginUser = (data: ILogin) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loginFetch())
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                localStorage.setItem('email', JSON.stringify(user.user.email) || '')
                localStorage.setItem('uid', user.user.uid)
                dispatch(loginSuccess())
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(loginError(errorMessage))
            });

    }
}