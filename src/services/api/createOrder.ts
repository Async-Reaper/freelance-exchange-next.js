import {IOrder} from "../../models/IOrder";
import {arrayUnion, doc, setDoc} from "@firebase/firestore";
import {db} from "../../firebase";

export const createOrder = async (data: IOrder) => {
    try {
        const users = doc(db, "users", String(data.creatorId))

        await setDoc(users, {
            orders: arrayUnion(data)
        }, {merge: true});

        await setDoc(doc(db, "orders", String(data.id)), data);
    } catch (e) {
        console.log(e)
    }

}
