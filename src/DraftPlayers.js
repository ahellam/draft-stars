import React from "react";
import PlayerCard from "./PlayerCard";

let money = 1100
function DraftPlayers({ players }) {

  return (
    <div className="DraftPlayers">
      <h2>Draft Your Players</h2>

      <div className="SelectQB">
        <label for="qb-select">Draft a QB:</label>
        <select name="qbs" id="QB-Select">
            <option value="">--Quarterbacks--</option>
          {players.filter(p => p.position === "QB").map(p => 
            <option key={p.id} value={p.name}>{p.name}</option>
            )}
        </select>
      </div>

        <PlayerCard players={players}/>
        

      <div className="SelectWR">
        <label for="wr-select">Draft a WR:</label>
        <select name="wrs" id="WR-Select">
            <option value="">--Wide Receivers--</option>
          {players.filter(p => p.position === "WR").map(p => 
            <option key={p.id} value={p.name}>{p.name}</option>
            )}
        </select>
      </div>
    
      <h3>Budget: ${money}</h3>
    </div>
    
  );
}

export default DraftPlayers;
