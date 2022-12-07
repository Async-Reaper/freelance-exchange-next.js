import React, {useState} from "react";
import {useTypeDispatch} from "../../src/hooks/useTypeDispatch";
import {ISignup} from "../../src/models/ISignup";
import {signupUser} from "../../src/services/api/signupUser";

const Index = () => {
    const [emailSignup, setEmailSignup] = useState<string>('');
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [passwordSignup, setPasswordSignup] = useState<string>('');
    const [repeatPassword, setRepeatPasswordSignup] = useState<string>('')
    const [roleUser, setRoleUser] = useState<string>('buyer')
    const dispatch = useTypeDispatch();

    const signupUserData: ISignup = {
        email: emailSignup,
        name,
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
        <div>
            <form onSubmit={(e) => handleSignup(e)}>
                <input
                   value={emailSignup}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailSignup(e.target.value)}
                />
                <input
                   value={name}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <input
                   value={surname}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                />
                <input
                   value={age}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
                />
                <input
                   value={passwordSignup}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordSignup(e.target.value)}
                />
                <input
                   value={repeatPassword}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatPasswordSignup(e.target.value)}
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Index;