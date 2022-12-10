import React from 'react';
import Head from "next/head";
import {IMainContainerTypes} from "./MainContainer.types";
import styles from './MainContainer.module.css'
import {NextPage} from "next";
import HeaderAll from "../UI/Header/HeaderAll/HeaderAll";

const MainContainer: NextPage<IMainContainerTypes> = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <title>PFE</title>
                <meta name="keywords" content={"freelance, remote-work, first-project-next" + keywords}/>
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <HeaderAll />
            <div className={styles.MainContainer}>
                {children}
            </div>

        </>
    );
};

export default MainContainer;
