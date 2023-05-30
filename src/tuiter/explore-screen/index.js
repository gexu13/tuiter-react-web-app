import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";

const ExploreScreen = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <AiOutlineSearch className="fs-3 position-absolute wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <GoGear className="wd-top-4 float-end fs-3 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 mt-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-inline">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="../../images/starship.png" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX starship
                </h1>
            </div>
            <div>
                <TuitSummaryList/>
            </div>
        </>
    );
}

export default ExploreScreen;