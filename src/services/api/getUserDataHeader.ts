import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../firebase";
import getCookie from "../../utils/cookie/getCookie";
import {AppDispatch} from "../../store/store";
import {getUserDataFetch, getUserDataSuccess} from "../../store/slices/userSlice/userSlice.slice";
import setCookie from "../../utils/cookie/setCookie";

export const getUserDataHeader = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getUserDataFetch())

            const docRef = doc(db, "users", String(getCookie('uid')));
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setCookie('firstname', docSnap?.data()?.firstname);
                setCookie('surname', docSnap?.data()?.surname)
                setCookie('roleUser', docSnap?.data()?.roleUser);
                setCookie('age', docSnap?.data()?.age)
            }

            dispatch(getUserDataSuccess())
        } catch (err) {
            console.log(err)

        }
    }

}