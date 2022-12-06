import React from 'react';
import {NextPage} from "next";
import {IOrderItemTypes} from "./OrderItem.types";

const OrderItem: NextPage<IOrderItemTypes> = ({order}) => {
    return (
        <div>
            {order.name}
            {order.description}
            {order.price}
            {order.date_finish}
            {order.creator}
            <button>Открыть</button>
        </div>
    );
};

export default OrderItem;