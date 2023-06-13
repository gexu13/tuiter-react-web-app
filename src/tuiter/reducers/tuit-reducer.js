// import tuits from "./tuits.json";
import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk } from "../services/tuits-thunks";
import { FaSearch } from "react-icons/fa";

const initialState = {
    tuits: [],
    loading: false,
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitSlice = createSlice(
    {
        name: "tuits",
        initialState,
        extraReducers: {
            [findTuitsThunk.pending]: (state) => {state.loading = true
                                                  state.tuits = []},
            [findTuitsThunk.fulfilled]: (state, { payload }) => {state.loading = false
                                                                 state.tuits = payload},
            [findTuitsThunk.rejected]: (state, action) => {state.loading = false
                                                           state.error = action.error},
            [deleteTuitThunk.fulfilled]: (state, { payload }) => {state.loading = false
                                                                  state.tuits = state.tuits.filter(t => t._id !== payload)},
            [createTuitThunk.fulfilled]: (state, {payload}) => {state.loading = false
                                                                state.tuits.push(payload)},
            [updateTuitThunk.fulfilled]: (state, {payload}) => {state.loading = false
                                                                const tuitIndex = state.tuits.findIndex(t => t._id === payload._id);
                                                                state.tuits[tuitIndex] = {...state.tuits[tuitIndex], ...payload};
                                                            }
        },
        reducers: {
            // likeTuit: (state, action) => {
            //     const tuit = state.tuits.find(tuit => tuit._id === action.payload._id)
            //     tuit.likes += 1
            //     tuit.liked = true;
            // },
            // unlikeTuit: (state, action) => {
            //     const tuit = state.tuits.find(tuit => tuit._id === action.payload._id)
            //     if(tuit.likes > 0) {
            //         tuit.likes -= 1
            //         tuit.liked = false
            //     }
            // },

            // createTuit(state, action) {
            //     state.tuits.unshift({
            //         ...action.payload,
            //         ...templateTuit,
            //         _id: (new Date()).getTime(),
            //     })
            // },

            // deleteTuit(state, action) {
            //     const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
            //     state.tuits.splice(index, 1);
            // }
        }
    }
);

// export const { likeTuit, unlikeTuit, createTuit, deleteTuit } = tuitSlice.actions;
export default tuitSlice.reducer;