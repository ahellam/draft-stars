import React from 'react'

function Create() {

  return (
    <div className="create">
        <h2>Create a new player</h2>
        <form type="submit">
          <input
          type="text"
          name="player"
          placeholder="New Player Name" 
          >
          </input>
          <select name="rating">
            <option value="">--Select Rating--</option>

          </select>
        </form>
    </div>
  )
}

export default Create