import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchUserById = (userId: number) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({id: userId, name: 'Dima'}), 1000)
    })
}

export const getUserById = createAsyncThunk(
    'users/by-id',
    async (userId:number, thunkAPI) => {
        try {
            const response = await fetchUserById(userId)
            return response;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
)