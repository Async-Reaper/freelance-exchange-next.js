import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../firebase";
import getCookie from "../../utils/cookie/getCookie";
import {IOrder} from "../../models/IOrder";

export const getMyOrders = async () => {
    try {
        const orders: any[] = [];
        const docRef = doc(db, "users", String(getCookie('uid')));
        const docSnap = await getDoc(docRef);

        docSnap?.data()?.orders?.map((order: IOrder) => {
            orders.push(order)
        })

        return orders
    } catch (e) {
        console.log(e)
    }
}