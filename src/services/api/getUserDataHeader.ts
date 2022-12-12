import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../firebase";
import setCookie from "../../utils/cookie/setCookie";
import getCookie from "../../utils/cookie/getCookie";

export const getUserDataHeader = async () => {
    const docRef = doc(db, "users", String(getCookie('uid')));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setCookie('firstname', docSnap?.data()?.firstname);
        setCookie('surname', docSnap?.data()?.surname)
        setCookie('roleUser', docSnap?.data()?.roleUser);
        setCookie('age', docSnap?.data()?.age)
    }
}