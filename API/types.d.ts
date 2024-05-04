export interface User {
    username: string;
    password: string;
    displayName: string;
    phoneNumber: string;
    token: string;
}

export interface Items {
    title: string;
    description: string;
    category: string
    price: string;
    user: string;
    phoneNumber: number;
}

interface UserMethods {
    checkPassword(password: string): Promise<boolean>;
    generateToken(): void;
}

interface ItemMethods {
    username(username: string): Promise<boolean>;
    phone(phone: number): Promise<boolean>;
}

export type ItemModel = Model<Items, {}, ItemMethods>

export type UserModel = Model<User, {}, UserMethods>