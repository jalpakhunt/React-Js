import React, { useState } from "react";

export default function TableRendar() {
    // let TableName = {trigger};
  let [player, setPlayer] = useState(true);
  function Fun(){
    setPlayer(trigger);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Golas</th>
            <th>Clubs</th>
            <th>Player</th>
          </tr>
        </thead>
        <tbody>
          {player ? (
            data.sort.map((player,index) => {
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.Golas}</td>
                <td>{player.Clubs}</td>
              </tr>;
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
      {/* <h1> This is Player Table</h1> */}
        <button onClick={()=>{Fun()}}>Play Button</button>
      </div>
    </div>
    
  );
}
