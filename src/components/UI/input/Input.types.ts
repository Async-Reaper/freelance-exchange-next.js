import {ChangeEvent} from "react";
import {FormElement} from "@nextui-org/react";

export interface IInput {
    underlined?: boolean;
    bordered?: boolean;
    type?: "number"
    labelPlaceholder?: string;
    label?: string;
    color: "default" | "primary" | "secondary" | "success" | "warning" | "error" | undefined;
    value: string | number;
    onChange: (e: ChangeEvent<FormElement>) => void;
}