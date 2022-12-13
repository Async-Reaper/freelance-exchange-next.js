import {ILogin} from "./ILogin";

export interface ISignup extends ILogin{
    firstname: string;
    surname: string;
    age: number;
    roleUser: string;
}