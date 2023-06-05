import tuits from "./tuits.json";
import { createSlice } from "@reduxjs/toolkit";

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
        initialState: {tuits: tuits},
        reducers: {
            likeTuit(state, action) {
                const tuit = state.tuits.find(tuit => tuit._id === action.payload._id)
                tuit.likes += 1
                tuit.liked = true;
            },
            unlikeTuit(state, action) {
                const tuit = state.tuits.find(tuit => tuit._id === action.payload._id)
                if(tuit.likes > 0) {
                    tuit.likes -= 1
                    tuit.liked = false
                }
            },

            createTuit(state, action) {
                state.tuits.unshift({
                    ...action.payload,
                    ...templateTuit,
                    _id: (new Date()).getTime(),
                })
            },

            deleteTuit(state, action) {
                const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
                state.tuits.splice(index, 1);
            }


        }
    }
);

export const { likeTuit, unlikeTuit, createTuit, deleteTuit } = tuitSlice.actions;
export default tuitSlice.reducer;