import React, {useEffect} from "react";
import MainContainer from "../../src/components/mainContainer/MainContainer";
import LoginForm from "../../src/components/forms/loginForm/LoginForm";
import {useTypedSelector} from "../../src/hooks/useTypedSelector";
import {useRouter} from "next/router";

export default function Login() {
    const {loginStatus} = useTypedSelector(state => state.login)

    const router = useRouter()
    useEffect(() => {
        loginStatus && router.push('/')
    })

    return (
        <MainContainer>
            <LoginForm />
        </MainContainer>
    );
};

