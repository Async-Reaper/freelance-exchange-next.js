import {arrayUnion, doc, setDoc} from "@firebase/firestore";
import {db} from "../../firebase";
import {IResponseOrder} from "../../models/IResponseOrder";
import getCookie from "../../utils/cookie/getCookie";

export const createResponseOrder = async (data: IResponseOrder, orderId: string) => {
    try {
        const responseUserId = String(getCookie('uid'))
        const order = doc(db, "orders", orderId)
        await setDoc(order, {
            responsesOrder: arrayUnion(data)
        }, {merge: true});
    } catch (e) {
        console.log(e)
    }
}