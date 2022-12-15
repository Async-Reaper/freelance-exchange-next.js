import {addZero} from "./addZero";

export const getDate = (): string => {
    const date = new Date()
    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}