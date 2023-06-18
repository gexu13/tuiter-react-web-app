import React from "react";

const TuitSummaryItem = ({
    tuit = {
        "topic": "Space",
        "username": "SpaceX",
        "time": "2h",
        "title": `Tesla CyberTruck lands on Mars and picks up
                  the Curiosity rover on its 6' bed`,
        "image": "tesla.png"
    }
}) => {

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
                <div className="col-10">
                    {tuit.username} · {displayTime()}
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
                </div>
            </div>
        </li>
    );
}

export default TuitSummaryItem;