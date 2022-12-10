import React from 'react';
import {NextPage} from "next";
import {IFormTemplate} from "./FormTemplate.types";
import styles from "./FormTemplate.module.css";
import {Card, Spacer} from "@nextui-org/react";

const FormTemplate: NextPage<IFormTemplate> = ({children, onSubmit}) => {
    return (
        <form className={styles.FormTemplate} onSubmit={onSubmit}>
            <Card css={{ mw: "330px" }}>
                <Card.Body>
                    <Spacer y={1} />
                    {children}
                </Card.Body>
            </Card>
            <Spacer y={2} />
        </form>
    );
};

export default FormTemplate;