import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    page:1
};
const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) =>{
                state.movies = action.payload})
    }
});


const {reducer:movieReducer} = movieSlice;

const movieActions = {
    getAllMovies
}

export {
    movieReducer,
    movieActions
}