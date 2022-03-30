import React from 'react'
import './card.css';

function PlayerCard({selectedPlayer}) {
  console.log("in card", selectedPlayer.name)

  const defaultImg = "https://www.kindpng.com/picc/m/97-971258_transparent-football-helmet-clipart-black-and-white-football.png"

  return (
    <div className="PlayerCard">
      <div className="PlayerImage">
        <img src={selectedPlayer.image || defaultImg} alt={selectedPlayer.name}/>
      </div>
      <div className="PlayerInfo">
        <div className="PlayerName">Name: {selectedPlayer.name}</div>
        <div className="PlayerRating">Rank: #{selectedPlayer.rank}</div>
        <div className="PlayerPrice">Price: ${selectedPlayer.price}</div>
      </div>
      <button className="DraftCutButton">
        DRAFT/CUT
      </button>

    </div>
  )
}

export default PlayerCard