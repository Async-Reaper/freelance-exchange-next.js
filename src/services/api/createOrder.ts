import {IOrder} from "../../models/IOrder";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "../../firebase";

export const createOrder = async (data: IOrder) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), data);
    } catch (e) {
        console.log(e)
    }

}
