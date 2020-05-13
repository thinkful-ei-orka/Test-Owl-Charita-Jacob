import React from 'react';
import participants from './store';

export default function ChatEntry(props) {
    let findById = participants.find(person => person.id === props.participantId);
    console.log(findById);
    let messageType = props.type;
    let message = '';
    if (messageType === 'message') {
        message += props.time + props.message;
    }
    else if(messageType === 'thumbs-up') {
        message += 'gave a thumbs up'
    }
    else if(messageType === 'thumbs-down') {
        message += 'gave a thumbs-down';
    }
    else if(messageType === 'raise-hand') {
        message += 'raised their hand';
    }
    else if (messageType === 'clap') {
        message += 'clapped';
    }
    else if (messageType === 'join') {
        message += 'joined';
    }
    else if (messageType === 'leave') {
        message += 'left';
    }
    else if (messageType === 'join-stage') {
        message += 'joined the stage';
    }
    else if (messageType === 'leave-stage') {
        message += 'left the stage';
    }

    return (
        <div className="Chat-Entry">
            <div className="TimeStamp"></div>
            <p><strong>{findById.name}</strong> {message}</p>
        </div>
    );
}