import React from "react";
import PlayerCard from "./PlayerCard";
import './draftPlayers.css';
import { useState } from "react";


function DraftPlayers({ players }) {
  const [selectedQB, setSelectedQB] = useState();
  const [selectedWR, setSelectedWR] = useState();
  const [money, setMoney] = useState(1100)
  // console.log("inDraft", selectedQB)



  return (
    <div className="DraftPlayers">
      <h2>Draft Your Players</h2>

      <div className="SelectQB">
        <label htmlFor="qb-select">Draft a QB:</label>
        <select
          className="Select"
          name="qbs"
          id="QB-Select"
          value={selectedQB}
          onChange={(e) => setSelectedQB(e.target.value)}
        >
          <option value="">--Quarterbacks--</option>
          {players
            .filter((p) => p.position === "QB")
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
        </select>
      </div>
      <div className="QBCard">
        {selectedQB && <PlayerCard 
        selectedPlayer={players.find((player) => player.id === parseInt(selectedQB))}
        
        />}
      </div>

      <div className="SelectWR">
        <label htmlFor="wr-select">Draft a WR:</label>
        <select
          className="Select"
          name="wrs"
          id="WR-Select"
          value={selectedWR}
          onChange={(e) => setSelectedWR(e.target.value)}
        >
          <option value="">--Wide Receivers--</option>
          {players
            .filter((p) => p.position === "WR")
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
        </select>
      </div>
      <div className="WRCard">
        {selectedWR && <PlayerCard 
        selectedPlayer={players.find((player) => player.id === parseInt(selectedWR))}
        // toggleDrafted={toggleDrafted}
        />}
      </div>

      <h3>Budget: ${money}</h3>
    </div>
  );
}

export default DraftPlayers;
