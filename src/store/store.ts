import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoriteReducer} from "./favorites/favorites.slice.ts";
import {userSlice} from "./user/user.slice.ts";
import {api} from "./api/api.ts";

const reducers = combineReducers({
    favorites: favoriteReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware);
    }
})