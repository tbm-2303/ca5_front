import React from "react";
import {timelineCreate} from "../settings";
//husk tilbage knapper
const CreateTimeline = () => {

    const createTimelineURL = async (timeline) => {
        const res = await fetch(timelineCreate, {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(timeline)
        });
    }

    function createTimeline(){
        const name = document.getElementById("timelineName").value;
        const description = document.getElementById("timelineDes").value;
        const startDate = document.getElementById("timelineStart").value;
        const endDate = document.getElementById("timelineEnd").value;

        const timeline ={
            "timelineName" : name,
            "timelineDes": description,
            "timelineStart" : startDate,
            "timelineEnd": endDate
        }
        console.log(JSON.stringify(timeline));
    }
    return (
        <div className="tableTimeline">
            <h2>Her kan du lave en ny timeline</h2>
            <h4>Navn</h4>
            <input type="text" id="timelineName"/>
            <br/>
            <h4>Beskrivelse</h4>
            <input type="text" id="timelineDes"/>
            <br/>
            <h4>Start tidspunkt</h4>
            <input type="text" id="timelineStart"/>
            <br/>
            <h4>Slut tidspunkt</h4>
            <input type="text" id="timelineEnd"/>
            <br/>
        </div>
    );
}


export default CreateTimeline;
