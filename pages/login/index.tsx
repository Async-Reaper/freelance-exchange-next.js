import React, {useState} from "react";
import {ILogin} from "../../src/models/ILogin";

export default function Index() {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginUserData: ILogin = {
        id: Date.now(),
        name,
        password
    }
    const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => loginUser(e)}>
                <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                <button>Войти</button>
            </form>
        </div>
    );
};

