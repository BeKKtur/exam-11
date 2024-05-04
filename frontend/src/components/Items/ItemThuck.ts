import {createAsyncThunk} from "@reduxjs/toolkit";
import {ItemMutation, ItemResponse, Items} from "../../types";
import axiosApi from "../../axiosApi";

export const addItem = createAsyncThunk(
    'item/addItem',
    async (itemMutation:ItemMutation)=> {
        const response = await axiosApi.post<ItemResponse>('/items/add-item', itemMutation);
        return response.data.item;
    }
);

export const fetchItem = createAsyncThunk(
    'item/fetchItem',
    async () => {
        const {data:item} = await axiosApi.get<Items | null>('/items');
        if(item === null) {
            return[];
        }

        return Object.keys(item).map(_id => ({
            _id,
            ...item[_id]
        }))
    }
);
