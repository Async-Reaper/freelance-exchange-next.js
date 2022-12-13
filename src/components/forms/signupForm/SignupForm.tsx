import React, {ChangeEvent, useState} from 'react';
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {ISignup} from "../../../models/ISignup";
import {signupUser} from "../../../services/api/signupUser";
import FormTemplate from "../../template/formTemplate/FormTemplate";
import InputUI from "../../UI/input/InputUI";
import {Button, FormElement, Input, Radio, Spacer} from "@nextui-org/react";

const SignupForm = () => {
    const [emailSignup, setEmailSignup] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [passwordSignup, setPasswordSignup] = useState<string>('');
    const [repeatPassword, setRepeatPasswordSignup] = useState<string>('')
    const [roleUser, setRoleUser] = useState<string>('buyer')
    const dispatch = useTypeDispatch();

    const signupUserData: ISignup = {
        email: emailSignup,
        firstname,
        surname,
        age,
        password: passwordSignup,
        roleUser
    }

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(signupUser(signupUserData))
    }
    return (
        <FormTemplate onSubmit={(e) => handleSignup(e)}>
            <InputUI
                bordered
                labelPlaceholder="E-mail"
                color="error"
                value={emailSignup}
                onChange={(e: ChangeEvent<FormElement>) => setEmailSignup(e.target.value)}
            />
            <InputUI
                bordered
                labelPlaceholder="Имя"
                color="error"
                value={firstname}
                onChange={(e: ChangeEvent<FormElement>) => setFirstname(e.target.value)}
            />
            <InputUI
                bordered
                labelPlaceholder="Фамилия"
                color="error"
                value={surname}
                onChange={(e: ChangeEvent<FormElement>) => setSurname(e.target.value)}
            />
            <Input
                bordered
                label="Дата рождения"
                color="error"
                type="date"
                value={age}
                onChange={(e: ChangeEvent<FormElement>) => setAge(Number(e.target.value))}
            />
            <Spacer y={2} />
            <Input.Password
                bordered
                labelPlaceholder="Пароль"
                color="error"
                value={passwordSignup}
                onChange={(e: ChangeEvent<FormElement>) => setPasswordSignup(e.target.value)}
            />
            <Spacer y={2} />
            <Input.Password
                bordered
                labelPlaceholder="Повторите пароль"
                color="error"
                value={repeatPassword}
                onChange={(e: ChangeEvent<FormElement>) => setRepeatPasswordSignup(e.target.value)}
            />
            <Spacer y={1} />
            <Radio.Group orientation="horizontal" defaultValue={roleUser}>
                <Radio value="buyer" onClick={() => setRoleUser('buyer')} size="sm" color="error">Я продавец</Radio>
                <Radio value="seller" onClick={() => setRoleUser('seller')} size="sm" color="error">Я заказчик</Radio>
            </Radio.Group>
            <Spacer y={1} />
            <Button shadow color="error" type="submit">Зарегистрироваться</Button>
        </FormTemplate>
    );
};

export default SignupForm;