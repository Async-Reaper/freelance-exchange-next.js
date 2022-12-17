import React, {useCallback, useState} from 'react';
import {Button, Input, Modal, Text, Textarea} from "@nextui-org/react";
import {NextPage} from "next";
import {IModalWindowResponseOrder} from "./ModalWindowResponseOrder.types";
import {IResponseOrder} from "../../../../models/IResponseOrder";
import {createResponseOrder} from "../../../../services/api/createResponseOrder";
import getCookie from "../../../../utils/cookie/getCookie";

const ModalWindowResponseOrder: NextPage<IModalWindowResponseOrder> = ({visible, setVisible, orderId}) => {
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(500);

    const responseOrderData: IResponseOrder = {
        uid: '',
        description,
        price
    };

    const handleResponseOrder = useCallback(() => {
        responseOrderData.uid = String(getCookie('uid'));
        createResponseOrder(responseOrderData, orderId);
        setVisible(false)
    }, [responseOrderData]);

    return (
        <div>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={() => setVisible(false)}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Отклик на заказ
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Textarea
                        label="Опишите ваши предложения"
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
                        label="Цена"
                        placeholder="Цена"
                        value={price}
                        type="number"
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat onPress={handleResponseOrder}>
                        Откликнуться
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalWindowResponseOrder;