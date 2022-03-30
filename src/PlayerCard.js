import React from 'react'
import './card.css';

function PlayerCard({selectedPlayer}) {
  console.log("in card", selectedPlayer.name)

  return (
    <div className="PlayerCard">
      <div className="PlayerImage">
        <img src={selectedPlayer.image} alt={selectedPlayer.name}/>
      </div>
      <div className="PlayerInfo">
        <div className="PlayerName">Name: {selectedPlayer.name}</div>
        <div className="PlayerRating">Rating: #{selectedPlayer.rating}</div>
        <div className="PlayerPrice">Price: ${selectedPlayer.price}</div>
      </div>
      <button className="DraftCutButton">
        DRAFT/CUT
      </button>

    </div>
  )
}

export default PlayerCard