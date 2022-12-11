import {ILogin} from "../../models/ILogin";
import {AppDispatch} from "../../store/store";
import {loginError, loginFetch, loginSuccess, setLoginStatus} from "../../store/slices/loginSlice/loginSlice";
import {getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import setCookie from "../../utils/cookie/setCookie";

export const loginUser = (data: ILogin) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loginFetch())
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                user.user.getIdToken().then(token =>
                    setCookie('token', token, {'samesite': 'strict'})
                )
                setCookie('uid', String(user.user.uid), {'samesite': 'strict'})
                dispatch(loginSuccess())
                dispatch(setLoginStatus(true))
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(loginError(errorMessage))
            });

    }
}