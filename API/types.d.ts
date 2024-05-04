export interface User {
    username: string;
    password: string;
    displayName: string;
    phoneNumber: string;
    token: string;
}

export interface Items {
    name: string;
    photo: string;
    price: number;
}

interface UserMethods {
    checkPassword(password: string): Promise<boolean>;
    generateToken(): void;
}

export type UserModel = Model<User, {}, UserMethods>