import React from 'react';
import {NextPage} from "next";
import {IFormTemplate} from "./FormTemplate.types";
import styles from "./FormTemplate.module.css";

const FormTemplate: NextPage<IFormTemplate> = ({children, onSubmit}) => {
    return (
        <form className={styles.FormTemplate} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default FormTemplate;