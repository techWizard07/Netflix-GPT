import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.showGptSearch =!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieName,movieDetails}=action.payload
            state.movieResults=movieDetails
            state.movieNames=movieName
        }
    }

})

export const {toggleGptSearch,addGptMovieResult}=gptSlice.actions

export default gptSlice.reducer