import "./Game.css";
import { useState } from "react";
import Board from "../Board/Board";
import Scores from "../Scores/Scores";

function Game() {
  
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });
  const [option, setOption] = useState("pro");

  return (
    <div className="Game">
        <select className="button" style={{
            marginBottom: "50px",
        }}
        onClick={(e) => setOption(e.target.value)}
        >
            <option value="pro">Pro</option>
            <option value="expert">Expert</option>
        </select>
      <Board setScores={setScores} option={option}/>
      <Scores scores={scores}/>
    </div>
  );
}

export default Game;
