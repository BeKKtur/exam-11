import {User} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {register} from "./userThunk";

interface UserState {
    user: User | null,
    registerLoading: boolean,
    registerError: boolean
}

const initialState:UserState = {
    user: null,
    registerError: false,
    registerLoading: false,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.registerLoading = true;
            state.registerError = false;
        }).addCase(register.fulfilled, (state, {payload: user}) => {
            state.registerLoading = false;
            state.user = user
        }).addCase(register.rejected, (state) => {
            state.registerLoading = false;
            state.registerError = true;
        })
    }
});

export const userReducer = userSlice.reducer;

export const selectUser = (state:RootState) => state.users.user
export const selectUserLoading = (state:RootState) => state.users.registerLoading;
export const selectUserError = (state:RootState) => state.users.registerError;