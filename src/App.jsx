// src/App.jsx

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setStrength] = useState(0);
  const [totalAgility, setAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952'
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796'
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355'
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776'
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4'
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2'
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2'
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc'
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537'
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e'
      }
    ]
  );

  // const handleAddFighter = (fighter) => {
  //   const newTeamArray = [...team, newTeamMember];
  //   setTeam(newTeamMember);
  //   money = money - zombieFighters.price
  //   totalStrength += zombieFighters.strength
  //   totalAgility += zombieFighters.agility
  // }

  // const handleRemoveFighter = () => {
  //   newTeamArray.filter((newTeamArray, zombieFighters) => i === index);
  //   newTeamArray = removeFromArray(newTeamArray, zombieFighters)
  //   money = money + zombieFighters.price
  //   totalStrength = totalStrength - zombieFighters.strength
  //   totalAgility = totalAgility - zombieFighters.agility
  // }

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setStrength(totalStrength + fighter.strength);
      setAgility(totalAgility + fighter.agility);
    }
  };

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    const newTeamArray = team.filter((_, i) => i !== index);
    setTeam(newTeamArray);
    setMoney(money + removedFighter.price);
    setStrength(totalStrength - removedFighter.strength);
    setAgility(totalAgility - removedFighter.agility);
  };

  return (
    <>
      <div>
        <h1>PICK YOUR FIGHTERS!</h1>
        
          <h2>Available Money: {money}</h2>
          <h2>Total Strength: {totalStrength}</h2>
          <h2>Total Agility: {totalAgility}</h2>
        
        <ul>
          {zombieFighters.map((fighter, idx) => (<li key={idx}>
            <img src={fighter.img} alt={`${fighter.name}`} />
            <h2>{fighter.name}</h2>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add Character</button>
          </li>
          ))}
        </ul>

        <u2>TEAM</u2>
        <ul>
          {team.map((fighter, idx) => (
            <li key={idx}>
              <img src={fighter.img} alt={fighter.name} />
              <h2>{fighter.name}</h2>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(idx)}>Remove Character</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
