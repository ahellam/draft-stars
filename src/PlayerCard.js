import React from 'react'

function PlayerCard({players}) {
  return (
    <div className="PlayerCard">PlayerCard
      <div className="PlayerImage">
        <img src={players.image} alt={players.name}/>
      </div>
      <div className="PlayerInfo">
        <div className="PlayerName">Name: {players.name}</div>
        <div className="PlayerRating">Rating: {players.rating}</div>
        <div className="PlayerPrice">Price: {players.price}</div>
      </div>
      <button className="DraftCutButton">
        DRAFT/CUT
      </button>

    </div>
  )
}

export default PlayerCard