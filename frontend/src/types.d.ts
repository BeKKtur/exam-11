export interface RegisterMutation {
    username: string;
    password: string;
    displayName: string;
    phoneNumber: string;
}

export interface User {
    _id: string;
    username: string;
    displayName: string;
    token: string;
}

export interface RegisterResponse {
    user: User;
    message: string;
}

export interface Item {
    title: string;
    description: string;
    category: string
    price: string;
    user: string;
    phoneNumber: number;
}

export interface ItemResponse {
    item: Item;
    message: string
}

export interface Items {
    [_id:string]: Item
}

export interface ItemMutation {
    title: string;
    description: string;
    category: string
    price: string;
}



export interface LoginMutation {
    username: string;
    password: string;
}

export interface GlobalError {
    error: string
}