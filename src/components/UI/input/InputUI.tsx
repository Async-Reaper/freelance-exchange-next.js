import React from 'react';
import {NextPage} from "next";
import {Spacer} from "@nextui-org/react";
import {IInput} from "./Input.types";
import {Input} from "@nextui-org/react";

const InputUI: NextPage<IInput> = ({underlined, bordered, type, onChange, value, labelPlaceholder, label, color}) => {
    return (
        <>
            <Input underlined={underlined} bordered={bordered} type={type} value={value} labelPlaceholder={labelPlaceholder} label={label} onChange={onChange} color={color}/>
            <Spacer y={2} />
        </>
    );
};

export default InputUI;