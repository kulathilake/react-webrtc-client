/**
 * This file contains redux store configurations.
 * Persisting the store to one of several modes of storage is setup with redux-persist
 */
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER, 
  REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  })
});

export const persistedStore = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
