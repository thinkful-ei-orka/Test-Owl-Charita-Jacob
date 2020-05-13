import React from 'react';
import Participant from './participant.js'



export default function List(props) {
    console.log(props);
    const listOfCards = props.participantList.map(card => (
      <Participant key={card.id} name={card.name} avatar={card.avatar} inSession ={card.inSession} onStage ={card.onStage} />
    ));
    
    return (
        <section className="List">
            <header className="List-header">
             <h3> This is our Participants </h3>
            </header>
            <div className="List-cards">
            {listOfCards}
            </div> 
    </section>  
    );
  }