import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    page: 1
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

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (arg,{rejectWithValue})=>{
        try {
            const {data} = await movieService.searchMovie(arg);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
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
            .addCase(searchMovie.fulfilled,(state, action) => {
                state.movies = action.payload?.results})
    }
});


const {reducer:movieReducer} = movieSlice;

const movieActions = {
    getAllMovies,
    searchMovie
}

export {
    movieReducer,
    movieActions
}