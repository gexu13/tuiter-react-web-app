import React from "react";
import TuitStats from "./tuit-stats";
import { AiFillCheckSquare } from "react-icons/ai"
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from "react-redux";
// import { deleteTuit } from "../reducers/tuit-reducer";
import { deleteTuitThunk } from "../services/tuits-thunks";


const MyTuitItem = (
    {
        tuit= { 
            "topic": "Space",  
            "username": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",   "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 32,
            "likes": 23345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"}
    }
) => {

    

    const dispatch = useDispatch();

    const deleteTuitHandler = (tuit) => {
        dispatch(deleteTuitThunk(tuit._id));
    };

    const displayTime = () => {
        var currentTime = Date.now();
        var selectedTime = new Date(tuit.postTime).getTime();
        var timeDifference = currentTime - selectedTime;
        var mins = Math.floor(timeDifference / (1000 * 60));
        var hours = Math.floor(timeDifference / (1000 * 60 * 60));
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        if (days > 0) {
            return days + "d";
        } else if (hours > 0) {
            return hours + "h";
        } else if (mins > 0) {
            return mins + "m";
        } else {
            return "now";
        }
    };

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={48} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <button className="float-end btn btn-link p-0
                                        text-decoration-none text-secondary" 
                                onClick={() => deleteTuitHandler(tuit)}>
                            <RxCross2 />
                        </button>
                        
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit)}></i>
                    </div>

                    <div>
                        <span className="fw-bolder me-1">
                            {tuit.username}
                            <span className="text-primary ms-1">
                                <AiFillCheckSquare/>
                            </span>
                        </span>
                        {tuit.handle} · {displayTime()}
                    </div>
                    <div>{tuit.tuit}</div>
                    <div><TuitStats tuit={tuit}/></div>
                </div>
            </div>
        </li>
    );



}

export default MyTuitItem;