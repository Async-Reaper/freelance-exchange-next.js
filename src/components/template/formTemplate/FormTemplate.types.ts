import React, {ReactNode} from "react";

export interface IFormTemplate {
    children: ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}