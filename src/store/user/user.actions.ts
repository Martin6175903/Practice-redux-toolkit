import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../types/user.types.ts";

const fetchUserById = (userId: number): Promise<IUser> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({id: userId, name: 'Dima'}), 1000)
    })
}

export const getUserById = createAsyncThunk<IUser, number>(
    'users/by-id',
    async (userId, thunkAPI) => {
        try {
            const response = await fetchUserById(userId)
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)