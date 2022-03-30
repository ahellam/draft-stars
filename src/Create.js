import React, { useState } from "react";



function Create() {

  const [newName, setNewName] = useState('')
  const [newRank, setNewRank] = useState(1)
  const [newPrice, setNewPrice] = useState(1000)
  const [newImage, setNewImage] = useState('')
  const [newPosition, setNewPosition] = useState("QB")
  

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      newName,
      newRank,
      newPrice,
      newImage,
      newPosition,
    
    }
    console.log(formData)
  }

  function handleRankChange (e) {
    const rank = parseInt(e.target.value)
    setNewRank(rank)
    const priceCalc = 1100 - (rank * 100) 
    setNewPrice(priceCalc)
  }

  return (
    <div className="create">

      <h2>Create a new player</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Player Name:</label>
        <input type="text" 
        id="name" 
        placeholder="New Player Name" 
        value={newName} 
        onChange={e => setNewName(e.target.value)}>          
        </input>

        <label htmlFor="rank">Select Rank:</label>
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

        <label htmlFor="price">Price:</label>
        <input type="text" 
        id="price" 
        value={newPrice}
        readOnly
       ></input>

        <label htmlFor="imgUrl">Image URL:</label>
        <input type="text" 
        id="imgUrl" 
        placeholder="Paste URL Here" 
        value={newImage}
        onChange={e => setNewImage(e.target.value)}>          
        </input>

        <label htmlFor="position">Select Position:</label>
        <select id="position" value={newPosition} onChange={e => setNewPosition(e.target.value)}>
          <option value="QB">Quarterback</option>
          <option value="WR">Wide Receiver</option>
        </select>   
        <input type="submit" value="CREATE NEW PLAYER" />    
      </form>
    </div>
  );
}

export default Create;
