import {AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";

export const useTypeDispatch = () => useDispatch<AppDispatch>();