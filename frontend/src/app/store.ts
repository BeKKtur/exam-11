import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "../components/User/userSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from "redux-persist"
import {itemReducer} from "../components/Items/itemSlice";

const userPersistConfig = {
    key: 'store:users',
    storage,
    whitelist: ['user'],

}

const rootReducer = combineReducers({
    users: persistReducer(userPersistConfig, userReducer),
    item: itemReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;