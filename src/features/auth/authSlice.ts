import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types/types';
 
const initState: AuthState = {
};

 
const authSlice = createSlice({
    initialState: initState,
    name: 'auth',
    reducers:{},
});


export default authSlice.reducer;