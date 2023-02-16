import { AppDispatch ,RootState} from "./index";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useSelector } from "react-redux/es/exports";


export const useAppDispatch:()=>AppDispatch=useDispatch;
// const isLoggedIn = useSelector((state: IRootState) => state.user.loggedIn);
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
