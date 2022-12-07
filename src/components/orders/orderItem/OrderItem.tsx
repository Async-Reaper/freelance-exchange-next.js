import React from 'react';
import {NextPage} from "next";
import {IOrderItemTypes} from "./OrderItem.types";
import styles from "./OrderItem.module.css"

const OrderItem: NextPage<IOrderItemTypes> = ({order}) => {
    return (
        <div className={styles.OrderItem}>
            <h3>{order.name}</h3>
            <p>{order.description}</p>
            <span>{order.price} ₽</span>
            <p>{order.date_finish}</p>
            <p>{order.creator}</p>
            <button>Открыть</button>
        </div>
    );
};

export default OrderItem;