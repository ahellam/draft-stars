import React from "react";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

let money = 1100;
function DraftPlayers({ players }) {
  const [selectedQB, setSelectedQB] = useState();
  const [selectedWR, setSelectedWR] = useState();
  console.log("inDraft", selectedQB)

  return (
    <div className="DraftPlayers">
      <h2>Draft Your Players</h2>

      <div className="SelectQB">
        <label for="qb-select">Draft a QB:</label>
        <select
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
      
      {selectedQB && <PlayerCard
        selectedPlayer={players.find((player) => player.id === parseInt(selectedQB))}
      />}

      <div className="SelectWR">
        <label for="wr-select">Draft a WR:</label>
        <select
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

      {selectedWR && <PlayerCard
        selectedPlayer={players.find((player) => player.id === parseInt(selectedWR))}
      />}

      <h3>Budget: ${money}</h3>
    </div>
  );
}

export default DraftPlayers;
