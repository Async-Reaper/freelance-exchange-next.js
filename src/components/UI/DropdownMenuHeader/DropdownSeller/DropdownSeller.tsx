import React from 'react';
import {Dropdown} from "@nextui-org/react";

const DropdownSeller = () => {
    return (
        <Dropdown>
            <Dropdown.Button flat>Trigger</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">New file</Dropdown.Item>
                <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownSeller;