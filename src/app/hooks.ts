/**
 * This file contains all the custom hooks required for the functionality of the application.
 */
import { useContext } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AlertContextType } from '../common/types/alert';
import AlertContext from './context/alert';
import { AuthContextType } from '../common/types/auth';
import type { RootState, AppDispatch } from './store';
import AuthContext from './context/auth';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuth = () => useContext<AuthContextType>(AuthContext);
export const useAlert = () => useContext<AlertContextType>(AlertContext);
