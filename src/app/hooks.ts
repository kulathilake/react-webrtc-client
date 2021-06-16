import { useContext } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AlertContextType } from '../common/types/alert.types';
import AlertContext from './context/alert';
import AuthContext, { AuthContextType } from './context/auth';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuth = () => useContext<AuthContextType>(AuthContext);
export const useAlert = () => useContext<AlertContextType>(AlertContext);
