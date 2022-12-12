import React, {useEffect} from "react";
import MainContainer from "../../src/components/mainContainer/MainContainer";
import SignupForm from "../../src/components/forms/signupForm/SignupForm";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../src/hooks/useTypedSelector";

const Index = () => {
    const { success } = useTypedSelector(state => state.signup);

    const router = useRouter()
    useEffect(() => {
        success && router.push('/login')
    })
    return (
        <MainContainer>
            <SignupForm />
        </MainContainer>
    );
};

export default Index;