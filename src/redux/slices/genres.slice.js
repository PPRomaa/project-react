import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    genres:[],
}

const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getGenres();
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getAllGenres.fulfilled,(state, action) =>{
                state.genres = action.payload})
    }
    }
);

const {reducer:genreReducer} = genreSlice;

const genresActions = {
    getAllGenres
}

export {
    genreReducer,
    genresActions
}