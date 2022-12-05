import React, {FC} from 'react';
import Head from "next/head";
import {IMainContainerTypes} from "./MainContainer.types";

const MainContainer: FC<IMainContainerTypes> = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <title>PFE</title>
                <meta name="keywords" content={"freelance, remote-work, first-project-next" + keywords}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
