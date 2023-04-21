import React from 'react'

export default function Player({ id, name, removePlayer }) {

    return (
        <div className="player">
            <span className="player-name">
                { name }
            </span>

           
        </div>
    )
}