import MainContainer from "../src/components/mainContainer/MainContainer";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../src/firebase";
import {IOrder} from "../src/models/IOrder";
import OrderItem from "../src/components/orders/orderItem/OrderItem";
import {useEffect} from "react";
import getCookie from "../src/utils/cookie/getCookie";

interface  Props {
    orders: IOrder[]
}

export default function Home( {orders}: Props) {

    return (
    <MainContainer>
        <div>
            {orders && orders.map(order =>
                <OrderItem key={order.id} order={order}/>
            )}
        </div>
    </MainContainer>
  )
}

export async function getServerSideProps() {
    try {
        const orders: any[] = [];
        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
            doc.data().id = doc.id;
            orders.push(doc.data());
        });
        return {
            props: {
                orders,
            }
        }
    } catch (err) {
        console.log(err)
    }

}
