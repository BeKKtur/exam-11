export interface RegisterMutation {
    username: string;
    password: string;
    displayName: string;
    phoneNumber: string;
}

export interface User {
    _id: string;
    username: string;
    token: string;
}

export interface RegisterResponse {
    user: User;
    message: string;
}