import React from 'react';
import StageMember from './StageMember';



export default function Stage (props) {
    let stage = props.stageList.map(card => (
    <StageMember key={card.id} name={card.name} avatar={card.avatar} inSession={card.inSession} onStage={card.onStage} />  
    ));
    return (
        <div className="Stage">
            <h3>Who's on Stage</h3>
            {stage}
        </div>
    );
};