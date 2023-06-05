import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { likeTuit, unlikeTuit} from "../reducers/tuit-reducer";
import { click } from "@testing-library/user-event/dist/click";


const TuitStats = (
    {
        tuit= { 
            "topic": "Space",  
            "userName": "SpaceX",
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

    const clickLike = (tuit) => {
        if(tuit.liked === false) {
            dispatch(likeTuit(tuit));
        }

        if(tuit.liked === true) {
            dispatch(unlikeTuit(tuit));
        }
    }


    return (
        <div className="row mt-1 mb-0">
            <div className="col-3">
                <button className="btn btn-link text-decoration-none text-secondary p-0">
                    <BiMessageRounded/> {tuit.replies}
                </button>
                
            </div>
            <div className="col-3">
                <button className="btn btn-link text-decoration-none text-secondary p-0">
                    <AiOutlineRetweet/> {tuit.retuits}
                </button>
            </div>
            <div className="col-3">
                <button onClick={()=> clickLike(tuit)}
                    className="btn btn-link text-decoration-none text-secondary p-0">
                    {tuit.liked === true ? 
                        <AiFillHeart className="text-danger"/> :
                        <AiOutlineHeart/>} {tuit.likes}
                </button>
            </div>
            <div className="col-3">
                <button className="btn btn-link text-decoration-none text-secondary p-0">
                    <CiShare1/>
                </button>
            </div>
        </div>
    );
}

export default TuitStats;