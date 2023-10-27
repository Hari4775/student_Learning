import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch } from "./store";
import { RootState } from './rootReducer';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState | any> = useSelector;   