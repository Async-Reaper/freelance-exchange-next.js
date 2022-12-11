import React, {ChangeEvent, useState} from 'react';
import {Button, FormElement, Input, Spacer} from "@nextui-org/react";
import FormTemplate from "../../template/formTemplate/FormTemplate";
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {ILogin} from "../../../models/ILogin";
import {loginUser} from "../../../services/api/loginUser";
import InputUI from "../../UI/input/InputUI";

const LoginForm = () => {
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
        <FormTemplate onSubmit={(e) => handleLogin(e)}>
            <InputUI
                bordered
                labelPlaceholder="E-mail"
                color="primary"
                value={emailLogin} onChange={(e: ChangeEvent<FormElement>) => setEmailLogin(e.target.value)}
            />
            <Input.Password
                bordered
                labelPlaceholder="Пароль"
                color="primary"
                value={passwordLogin} onChange={(e: ChangeEvent<FormElement>) => setPasswordLogin(e.target.value)}
            />
            <Spacer y={2} />
            <Button shadow color="primary" type="submit">Войти</Button>
        </FormTemplate>
    );
};

export default LoginForm;