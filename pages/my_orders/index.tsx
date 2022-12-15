import React from 'react';
import MainContainer from "../../src/components/mainContainer/MainContainer";

const Index = () => {
    return (
        <MainContainer>
            My orders
        </MainContainer>
    );
};

export async function getServerSideProps() {
    try {

    } catch (e) {
        console.log(e)
    }
}

export default Index;