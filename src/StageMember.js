import React from 'react';

export default function StageMember(props) {
    return (
        <div className="StageMember">
            <div className="Username-Stage">
                {props.name}
            </div>
            <img src={props.avatar} />
        </div>
    );
}