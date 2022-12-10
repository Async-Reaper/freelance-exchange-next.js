import React from 'react';
import {NextPage} from "next";
import {IOrderItemTypes} from "./OrderItem.types";
import styles from "./OrderItem.module.css"
import {Button, Card, Col, Row, Spacer, User} from "@nextui-org/react";

const OrderItem: NextPage<IOrderItemTypes> = ({order}) => {
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
                <Button color="success">Открыть</Button>
            </Card.Footer>
        </Card>
        <Spacer y={2} />
    </>
    );
};

export default OrderItem;