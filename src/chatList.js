import React from 'react';
import ChatEntry from './chatEntry';

const chatEvents = [
    {
        participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: '10:45 pm ',
        timestamp: 1548852484247
    },
    {
        participantId: 2,
        type: 'thumbs-up',
        timestamp: 1548852484247
    },
    {
        participantId: 4,
        type: 'thumbs-down',
        timestamp: 1548852484247
    },
    {
        participantId: 1,
        type: 'raise-hand',
        timestamp: 1548852544247
    },
    {
        participantId: 1,
        type: 'clap',
        timestamp: 1548852544247
    },
    {
        participantId: 1,
        type: 'join',
        timestamp: 1548852544247
    },
    {
        participantId: 5,
        type: 'leave',
        timestamp: 1548852604247
    },
    {
        participantId: 3,
        type: 'join-stage',
        timestamp: 1548852664247
    },
    {
        participantId: 3,
        type: 'leave-stage',
        timestamp: 1548852724247
    }
];



export default function ChatList() {
    let chatList = chatEvents.map(entry => (
        <ChatEntry participantId={entry.participantId} type={entry.type} message={entry.message} time={entry.time} timestamp={entry.timestamp}/>
    ));
    return (
        <div>
            {chatList}
        </div>
    );
}