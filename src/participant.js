import React from 'react';


export default function Participant (props) {
    let status = '';
    if(props.onStage) {
        status += 'On Stage';
    }
    else if (props.inSession) {
        status += 'In Session';
    }
    else {
        status += 'Left Session';
    }
    return (
        <div className="Participant">
            <h4>{props.name}</h4>
            <img src={props.avatar} alt="Avatar icon" />
            <p>{status}</p>
        </div>
    );
}

//name 
//avatar
//status
    //if status = on stage, then onStage property is true
            //display "On Stage"
    //if status !== on stage, then we need to check if they are 
    //in the session
        //if inSession === true, then the participant is in the
        //session.  Display "In session"
        //if inSession === false, then the participant left the
        //session.  Display "Left Session"