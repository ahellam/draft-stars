import React from "react";
import PlayerCard from "./PlayerCard";
import './draftPlayers.css';
import { useState } from "react";

function DraftPlayers({ players, setPlayers }) {
  const [selectedQB, setSelectedQB] = useState();
  const [selectedWR, setSelectedWR] = useState();
  const [money, setMoney] = useState(1100)

  function handleDraft(player) {
    // console.log(player)
    const draftedPlayer = {...player, drafted: true}
    const newPlayers = players.map( p => p.id === player.id ? draftedPlayer : p )

    if (player.price <= money){
      setPlayers(newPlayers)
      setMoney(money - player.price)
    } else {
      alert("CHECK YOUR BUDGET & PLEASE DRAFT SOMEONE LESS EXPENSIVE")
    }
  }
  
  function handleCut(player) {
    // console.log(player)
    const draftedPlayer = {...player, drafted: false}
    const newPlayers = players.map( p => p.id === player.id ? draftedPlayer : p )

    setPlayers(newPlayers)
    setMoney(money + player.price)
  }

  function handleDelete(player) {
     player.drafted && handleCut(player)

    fetch(`http://localhost:3000/players/${player.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"},
    })
    .then(() => {
      if (player.position === "QB") {
        setSelectedQB()
      } else {
        setSelectedWR()
      }
    })
  
    .then(() => setPlayers(players.filter(p => p.id !== player.id)))
    // .then(() => player.drafted && handleCut(player))
  }

  return (
    <div className="DraftPlayers">
      <h2> 🏈 &nbsp;&nbsp; Draft Your Players &nbsp;&nbsp; 🏈 </h2>

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
        handleDraft={handleDraft}
        handleCut={handleCut}
        handleDelete={handleDelete}
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
        handleDraft={handleDraft}
        handleCut={handleCut}
        handleDelete={handleDelete}
        />}
      </div>

      <h3>💰 &nbsp; Budget: ${money} &nbsp; 💰</h3>
    </div>
  );
}

export default DraftPlayers;
