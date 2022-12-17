import {IOrder} from "../../models/IOrder";
import {addDoc, collection, doc, setDoc} from "@firebase/firestore";
import {db} from "../../firebase";

export const createOrder = async (data: IOrder) => {
    try {
        await setDoc(doc(db, "orders", String(data.id)), data);
    } catch (e) {
        console.log(e)
    }

}
