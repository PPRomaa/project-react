import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    page: 1,
    currentGenre:null
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

const findGenre = createAsyncThunk(
    'genreSlice/findGenre',
    async ({currentGenre},{rejectWithValue})=>{
        try {
           const {data} = await movieService.searchGenre(currentGenre);
           return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        selected:(state, action)=>{
            state.currentGenre = [];
            state.currentGenre.push(action.payload)
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) =>{
                state.movies = action.payload})
            .addCase(searchMovie.fulfilled,(state, action) => {
                state.movies = action.payload})
            .addCase(findGenre.fulfilled,(state, action) => {
                state.movies = action.payload
            })
    }
});


const {reducer:movieReducer,actions:{selected}} = movieSlice;

const movieActions = {
    getAllMovies,
    searchMovie,
    selected,
    findGenre
}

export {
    movieReducer,
    movieActions
}