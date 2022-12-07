import React, {useState} from "react";
import {ILogin} from "../../src/models/ILogin";
import {loginUser} from "../../src/services/api/loginUser";
import {useTypeDispatch} from "../../src/hooks/useTypeDispatch";
import MainContainer from "../../src/components/mainContainer/MainContainer";
import FormTemplate from "../../src/components/template/formTemplate/FormTemplate";

export default function Login() {
    const [emailLogin, setEmailLogin] = useState<string>('')
    const [passwordLogin, setPasswordLogin] = useState<string>('')
    const dispatch = useTypeDispatch();

    const loginUserData: ILogin = {
        email: emailLogin,
        password: passwordLogin
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser(loginUserData))
    }

    return (
        <MainContainer>
            <FormTemplate onSubmit={(e) => handleLogin(e)}>
                <input value={emailLogin} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailLogin(e.target.value)} />
                <input value={passwordLogin} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordLogin(e.target.value)}/>
                <button type="submit">Войти</button>
            </FormTemplate>
        </MainContainer>
    );
};

