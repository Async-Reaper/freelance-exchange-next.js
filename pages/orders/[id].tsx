import React from 'react';
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../src/firebase";
import MainContainer from "../../src/components/mainContainer/MainContainer";
import {Button, Card, Col, Row, Spacer, User} from "@nextui-org/react";
import styles from "../../src/components/orders/orderItem/OrderItem.module.css";

const Id = ({order}: any) => {
    const {query, push} = useRouter();

    return (
        <MainContainer>
            <Card
                isHoverable
                css={{ mw: "400px" }}
            >
                <Card.Header>
                    <Col>
                        <User
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            name={order.creator}
                            size="xs"
                        />
                        <h1 className={styles.OrderTitle}>{order.name}</h1>
                    </Col>
                </Card.Header>
                <Card.Body>
                    <span className={styles.OrderText}>{order.description}</span>
                    <Row justify="space-between" align="center">
                        <span className={styles.OrderText}>Бюджет: {order.price} ₽</span>
                        <span className={styles.OrderText}>Срок завершения: {order.date_finish}</span>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Button color="success" >Откликнуться</Button>
                </Card.Footer>
            </Card>
            <Spacer y={2} />
        </MainContainer>
    );
};

export const getServerSideProps = async ({params}: any) => {
    try {
        const docRef = doc(db, "orders", params.id);
        const docSnap  = await getDoc(docRef);
        const order = docSnap.data()

        return {
            props: {
                order,
            }
        }
    }catch (err) {
        console.log(err);
    }
}

export default Id;