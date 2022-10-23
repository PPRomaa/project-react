import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    genres:[],
    genre: null
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
    reducers:{
        getGenre: (state, action) => {
            state.genre = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAllGenres.fulfilled,(state, action) =>{
                state.genres = action.payload})
    }
    }
);

const {reducer:genreReducer,actions:{getGenre}} = genreSlice;

const genresActions = {
    getAllGenres,
    getGenre
}

export {
    genreReducer,
    genresActions
}