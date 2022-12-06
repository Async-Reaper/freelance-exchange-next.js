import React from 'react';
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../src/firebase";

const Id = ({order}: any) => {
    const {query} = useRouter();
    return (
        <div>
            
        </div>
    );
};

export const getServerSideProps = async (params: any) => {
    try {
        const docRef = doc(db, "order", params.id);
        const order = await getDoc(docRef);
        return {
            props: {
                order
            }
        }
    }catch (err) {
        console.log(err);
    }
}

export default Id;