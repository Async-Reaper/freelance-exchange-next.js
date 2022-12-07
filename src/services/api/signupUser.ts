import {ISignup} from "../../models/ISignup";
import {AppDispatch} from "../../store/store";
import {signupError, signupFetch, signupSuccess} from "../../store/slices/signupSlice/signupSlice.slice";
import {createUserWithEmailAndPassword, getAuth} from "@firebase/auth";
import {doc, setDoc} from "@firebase/firestore";
import {db} from "../../firebase";

export const signupUser = (dataSignup: ISignup) => {
    return async (dispatch: AppDispatch) => {
        dispatch(signupFetch())
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, dataSignup.email, dataSignup.password)
            .then((userCredential) => {
                setDoc(doc(db, "users", userCredential.user.uid), dataSignup);
                dispatch(signupSuccess())
            }).catch((error) => {
                console.log(error)
            dispatch(signupError(error.message))
            console.log(error.message)
        })
    }
}