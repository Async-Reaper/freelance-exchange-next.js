import React, {useState} from "react";
import {ILogin} from "../../src/models/ILogin";
import {loginUser} from "../../src/services/api/loginUser";

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginUserData: ILogin = {
        email,
        password
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginUser(loginUserData)
    }

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e)}>
                <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

