import {React} from 'react'
import { useHistory } from "react-router-dom";
import './home.css';

function Home() {

  const history = useHistory()

  function linkToDraft () {
    history.push("/draft")
  }
  return (
    <div className="home">

        <h1 className="Header1">🏈 &nbsp;&nbsp; Welcome to Draft Stars &nbsp;&nbsp; 🏈</h1>
    
        <p className="Rules">
          At Draft Stars, we believe football is more exciting with skin in the game.<br></br>
          For that reason, we are committed to responsibly creating the worlds favorite betting experience.<br></br>
          Configure your team by drafting an all star quarterback and an explosive wide receiever.<br></br> 
          The higher the players rank, the more expensive the player is, so keep an eye on your budget!<br></br>
          If you are unsatisfied with the available players, you may choose to create your own.<br></br>
          Please bet responsibly!
        </p>

        <div className="GetStarted">
          <button className="GoToDraft" onClick={linkToDraft}> GET STARTED </button>
        </div>


    </div>
  )
}

export default Home