import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import {IOrderItemTypes} from "./OrderItem.types";
import styles from "./OrderItem.module.css"
import {Button, Card, Col, Container, Spacer, User} from "@nextui-org/react";
import getCookie from "../../../utils/cookie/getCookie";
import ModalWindowResponseOrder from "../../UI/modalWindows/modalWindowResponseOrder/ModalWindowResponseOrder";

const OrderItem: NextPage<IOrderItemTypes> = ({order}) => {
    const [showButton, setShowButton] = useState<boolean>(false);
    const [visibleModalCreateOrderResponse, setVisibleModalCreateOrderResponse] = useState<boolean>(false);

    useEffect(() => {
        if (getCookie('roleUser')) {
            getCookie('roleUser') === 'seller' && setShowButton(true);
        }
    }, [])

    return (
    <>
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
                </Col>
            </Card.Header>
            <Card.Body>
                <Container display="flex" direction="column">
                    <h1 className={styles.OrderTitle}>{order.name}</h1>
                    <span className={styles.OrderText}>{order.description}</span>
                    <span className={styles.OrderText}>Бюджет: {order.price} ₽</span>
                    <span className={styles.OrderText}>Срок завершения: {order.date_finish.replace(/T/i, ' ')}</span>
                </Container>
            </Card.Body>
            <Card.Footer>
                {showButton && <Button color="success" onPress={() => setVisibleModalCreateOrderResponse(true)}>Откликнуться</Button>}
            </Card.Footer>
        </Card>
        <Spacer y={2} />
        <ModalWindowResponseOrder visible={visibleModalCreateOrderResponse} setVisible={setVisibleModalCreateOrderResponse} orderId={order.id}/>
    </>
    );
};

export default OrderItem;