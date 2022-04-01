import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import './create.css';


function Create({onAddPlayer}) {

  const [newName, setNewName] = useState('')
  const [newRank, setNewRank] = useState(1)
  const [newPrice, setNewPrice] = useState(1000)
  const [newImage, setNewImage] = useState('')
  const [newPosition, setNewPosition] = useState("QB")
  const history = useHistory();
  
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      name: newName,
      image: newImage,
      rank: newRank,
      position: newPosition,
      price: newPrice,
      canDelete: true
      // drafted: false

    }
    // console.log("handleSubmit formData:", formData)

    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(console.log("AFTER THE POST FORMDATA", formData))    //  
    .then(onAddPlayer(formData))

    setNewName('')
    setNewRank(1)
    setNewPrice(1000)
    setNewImage('')
    setNewPosition("QB")

    history.push("/draft")
  }

  function handleRankChange (e) {
    const rank = parseInt(e.target.value)
    setNewRank(rank)
    const priceCalc = 1100 - (rank * 100) 
    setNewPrice(priceCalc)
  }

  return (
    <div id="create" className="create">

      <h2>🏈 &nbsp;&nbsp; Create a New Player &nbsp;&nbsp; 🏈</h2>

      <form className="playerform" onSubmit={handleSubmit}>

        <div className="playerName">
          <label htmlFor="name">Player Name: </label>
          <input 
            type="text" 
            id="name"
            className="name"
            placeholder="New Player Name" 
            required
            value={newName} 
            onChange={e => setNewName(e.target.value)}>          
          </input>
        </div>

        <div className="playerRank">
          <label htmlFor="rank">Select Rank: </label>
          <select id="rank" value={newRank} onChange={handleRankChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="playerPrice">
          <label htmlFor="price">Price: </label>
          <input 
            type="text" 
            id="price" 
            value={newPrice}
            readOnly>
          </input>
        </div>

        <div className="playerImg">
          <label htmlFor="imgUrl">Image URL: </label>
          <input 
            type="text" 
            id="imgUrl" 
            placeholder="Paste URL Here" 
            value={newImage}
            onChange={e => setNewImage(e.target.value)}>          
          </input>
        </div>

        <div className="playerPosition">
          <label htmlFor="position">Select Position: </label>
          <select id="position" value={newPosition} onChange={e => setNewPosition(e.target.value)}>
            <option value="QB">Quarterback</option>
            <option value="WR">Wide Receiver</option>
          </select>
        </div>   
        <input className="submit" type="submit" value=" CREATE NEW PLAYER " />    
      </form>
    </div>
  );
}

export default Create;
