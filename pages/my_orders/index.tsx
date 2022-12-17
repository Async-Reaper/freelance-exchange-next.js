import React from 'react';
import MainContainer from "../../src/components/mainContainer/MainContainer";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../src/firebase";
import {IOrder} from "../../src/models/IOrder";
import OrderItem from "../../src/components/orders/orderItem/OrderItem";
import getCookie from "../../src/utils/cookie/getCookie";

interface  Props {
    orders: IOrder[]
}

const Index = ({orders}: Props) => {

    return (
        <MainContainer>
            <div>
                {orders ? orders.map(order =>
                    <OrderItem key={order.id} order={order}/>
                ) : <p>NO</p>}
            </div>
        </MainContainer>
    );
};

// export async function getServerSideProps() {
//     try {
//         const orders: any[] = [];
//         const nonResult = {result: 'У вас нет созданных заказов :('}
//         // const nameCurrentUser = `${getCookie('firstname')} ${getCookie('surname')}`
//         const querySnapshot = await getDocs(collection(db, "orders"));
//
//         querySnapshot.forEach((doc) => {
//             if (JSON.stringify(doc.data().creator) == `${getCookie('firstname')} ${getCookie('surname')}`) {
//                 orders.push(doc.data());
//             } else {
//                 orders.push(nonResult);
//             }
//         });
//
//         if (orders[0].creator) {
//             return {
//                 props: {
//                     orders,
//                 }
//             }
//         } else {
//             return {notFound: true,}
//         }
//
//     } catch (e) {
//         console.log(e)
//     }
// }

export default Index;