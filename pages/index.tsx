import MainContainer from "../src/components/MainContainer/MainContainer";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../firebase";

export default function Home({ orders }: any) {
    console.log(orders)
    // getData()
  return (
    <MainContainer>
      <h2>create</h2>
    </MainContainer>
  )
}

// async function getData() {
//     const orders: any[] = [];
//     const querySnapshot = await getDocs(collection(db, "orders"));
//     querySnapshot.forEach((doc) => {
//         orders.push(doc.data());
//     });
//     console.log(orders)
// }

export async function getServerSideProps(context: any) {
    try {
        const orders: any[] = [];
        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
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