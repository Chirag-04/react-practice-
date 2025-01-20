import React from 'react'

const Players = () => {
    const player1 = 'Virat Kohli';
    const player2 = 'Rohit Sharma';

    const team = ["Rohit Sharma" , "Gill" , "Virat kohli" , "Kl Rahul"  ,"Iyer" ,"Hardik"];
  return (
    <div>
        <ul>
            <li>First player : {player1}</li>
            <li>Second player : {player2}</li>
        </ul>
        <ul>
        {team.map((player, index) => {
          return <li key={index}>Player: {index} is {player}</li>;
        })}
      </ul>
        <hr></hr>
    </div>
  )
}

export default Players