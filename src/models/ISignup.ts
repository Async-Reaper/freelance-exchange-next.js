import {ILogin} from "./ILogin";

export interface ISignup extends ILogin{
    name: string;
    surname: string;
    age: number;
}