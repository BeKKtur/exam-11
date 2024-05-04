import mongoose from "mongoose";
import {ItemMethods, ItemModel, Items} from "../types";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema

const itemSchema = new Schema<Items, ItemModel, ItemMethods>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    }
},{versionKey: false});


// @ts-ignore
itemSchema.methods.username = function (username) {
    return this.user = username
}

// @ts-ignore
itemSchema.methods.phone = function (phone) {
    return this.phoneNumber = phone;
}

const itemsModel = mongoose.model<Items, ItemModel>('items', itemSchema);

export default itemsModel;
