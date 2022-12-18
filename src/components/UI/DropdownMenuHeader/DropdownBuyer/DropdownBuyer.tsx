import React, {useState} from 'react';
import {Button, Dropdown} from "@nextui-org/react";
import ModalWindowCreateOrder from "../../modalWindows/modalWindowCreateOrder/ModalWindowCreateOrder";
import Link from "next/link";

const DropdownBuyer = () => {
    const [visibleModalCreateOrder, setVisibleModalCreateOrder] = useState<boolean>(false);

    return (
        <>
            <Dropdown>
                <Dropdown.Button flat>Меню</Dropdown.Button>
                <Dropdown.Menu aria-label="Buyer menu">
                    <Dropdown.Item key="new">
                        <Button light color="primary" auto onPress={() => setVisibleModalCreateOrder(true)}>Создать заказ</Button>
                    </Dropdown.Item>
                    <Dropdown.Item key="copy">
                        <Link href={'/my_orders'}>Мои заказы</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <ModalWindowCreateOrder visible={visibleModalCreateOrder} setVisible={setVisibleModalCreateOrder}/>
        </>
);
};

export default DropdownBuyer;