import React, {useCallback, useState} from 'react';
import {Button, Input, Modal, Text, Textarea} from "@nextui-org/react";
import {NextPage} from "next";
import {IModalWindowCreateOrder} from "./ModalWindowCreateOrder.types";
import {IOrder} from "../../../../models/IOrder";
import getCookie from "../../../../utils/cookie/getCookie";
import {getDate} from "../../../../utils/date/getDate";
import {createOrder} from "../../../../services/api/createOrder";

const ModalWindowCreateOrder: NextPage<IModalWindowCreateOrder> = ({visible, setVisible}) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(500)
    const [dateFinish, setDateFinish] = useState<string>('')

    const orderData: IOrder ={
        id: String(Date.now()),
        creatorId: String(getCookie('uid')),
        name,
        description,
        creator: `${getCookie('firstname')} ${getCookie('surname')}`,
        price,
        date_finish: dateFinish,
        date_create: getDate()
    }

    const handleCreateOrder = useCallback(() => {
        createOrder(orderData);
        setVisible(false)
    }, [orderData])

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={() => setVisible(false)}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Создайте заказ
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Наименование заказа"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Textarea
                    label="Описание заказа"
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Цена"
                    value={price}
                    type="number"
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <Input
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Дата завершения"
                    type="date"
                    value={dateFinish}
                    onChange={(e) => setDateFinish(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat onPress={handleCreateOrder}>
                    Создать заказ
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalWindowCreateOrder;