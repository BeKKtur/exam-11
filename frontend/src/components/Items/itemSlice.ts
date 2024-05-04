import {Item} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {addItem, fetchItem} from "./ItemThuck";

interface ItemState {
    item: Item | null;
    items: Item[] | null;
    itemLoading: boolean;
    itemError: boolean;
}

const initialState:ItemState = {
    item: null,
    items: null,
    itemError: false,
    itemLoading: false
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addItem.pending, (state) => {
            state.itemLoading = true;
            state.itemError = false;
        }).addCase(addItem.fulfilled, (state, {payload: item}) => {
            state.itemLoading = false;
            state.item = item
        }).addCase(addItem.rejected, (state) => {
            state.itemLoading = false;
            state.itemError = true;
        });
        builder.addCase(fetchItem.pending, (state) => {
            state.itemLoading = true;
        }).addCase(fetchItem.fulfilled , (state, {payload: item}) => {
            state.itemLoading = false;
            state.items = item;
        }).addCase(fetchItem.rejected, (state) => {
            state.itemError = true;
        })
    }
});

export const itemReducer = itemSlice.reducer