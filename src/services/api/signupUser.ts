import {ISignup} from "../../models/ISignup";
import {AppDispatch} from "../../store/store";
import {signupError, signupFetch, signupSuccess} from "../../store/slices/signupSlice/signupSlice.slice";
import {createUserWithEmailAndPassword, getAuth} from "@firebase/auth";

export const signupUser = (dataSignup: ISignup) => {
    return (dispatch: AppDispatch) => {
        dispatch(signupFetch())
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, dataSignup.email, dataSignup.password)
            .then((userCredential) => {
                localStorage.setItem('email', JSON.stringify(userCredential.user.email) || '')
                localStorage.setItem('uid', userCredential.user.uid)
                dispatch(signupSuccess())
            }).catch((error) => {
            dispatch(signupError(error.message))
            console.log(error.message)
        })
    }
}