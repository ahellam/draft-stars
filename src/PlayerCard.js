import React from "react";
import "./card.css";

function PlayerCard({ selectedPlayer, handleDraft, handleCut, handleDelete }) {
  // console.log("in card", selectedPlayer)

  const defaultImg =
    "https://www.kindpng.com/picc/m/97-971258_transparent-football-helmet-clipart-black-and-white-football.png";

  // function toggleDrafted (player) {
  //   console.log(player)
  // }
  function handleClick() {
    selectedPlayer.drafted
      ? handleCut(selectedPlayer)
      : handleDraft(selectedPlayer);
  }

  return (
    <div className="PlayerCard">
      <div className={selectedPlayer.drafted ? "MyClass" : "PlayerImage"}>
        <img
          src={selectedPlayer.image || defaultImg}
          alt={selectedPlayer.name}
        />
      </div>
      <div className="PlayerInfo">
        <div className="PlayerName">Name: {selectedPlayer.name}</div>
        <div className="PlayerRating">Rank: #{selectedPlayer.rank}</div>
        <div className="PlayerPrice">Price: ${selectedPlayer.price}</div>
      </div>
      <button className="DraftCutButton" onClick={handleClick}>
        {selectedPlayer.drafted ? "CUT" : "DRAFT"}
      </button>
      <div className="DeleteButton">
        {selectedPlayer.canDelete && (
          <button
            onClick={() => {
              // e.stopPropagation()
              handleDelete(selectedPlayer);
            }}
          >
            DELETE
          </button>
        )}
      </div>
    </div>
  );
}

export default PlayerCard;
