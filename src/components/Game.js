import React, { useState, useEffect } from "react";
import Card from "./Card";
import Amish from "../img/Amish Cyborg.jpeg";
import Nicky from "../img/Cousin Nicky.jpeg";
import Frank from "../img/Frankenstein.jpeg";
import Ghost from "../img/Ghoit in a Jar.jpeg";
import Hamurai from "../img/Hamurai.jpeg";
import Beauregard from "../img/Mr Beauregard.jpeg";
import Pencil from "../img/Pencilvester.jpeg";
import Raptor from "../img/Phorography Raptor.jpeg";
import Giraffe from "../img/Reverse Giraffe.jpeg";
import Gary from "../img/Sleepy Gary.jpeg";
import Tinkles from "../img/Tinkles.jpeg";
import Steve from "../img/Uncle Steve.jpeg";

const Game = () => {
  const [gameArray, setGameArray] = useState([
    {
      name: "Cousin Nicky",
      img: Nicky,
    },
    {
      name: "Mr. Beauregard",
      img: Beauregard,
    },
    {
      name: "Frankenstein",
      img: Frank,
    },
    {
      name: "Sleepy Gary",
      img: Gary,
    },
    {
      name: "Photography Raptor",
      img: Raptor,
    },
    {
      name: "Pencilvester",
      img: Pencil,
    },
    {
      name: "Tinkles",
      img: Tinkles,
    },
    {
      name: "Hamurai",
      img: Hamurai,
    },
    {
      name: "Amish Cyborg",
      img: Amish,
    },
    {
      name: "Reverse Giraffe",
      img: Giraffe,
    },
    {
      name: "Ghost in a Jar",
      img: Ghost,
    },
    {
      name: "Uncle Steve",
      img: Steve,
    },
  ]);

  const [score, setScore] = useState(0);
  const [playerArr, setPlayerArr] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  function cardclick(e) {
    if (playerArr.includes(`${e.target.innerText}`)) {
      setPlayerArr(() => {
        return [];
      });
      if (bestScore || localStorage.getItem("RM_Best_Score") < score) {
        setBestScore(() => score);
        localStorage.setItem("RM_Best_Score", score);
      }
      setScore(() => 0);
    } else {
      setPlayerArr((prevState) => {
        return [...prevState, e.target.innerText];
      });
      setScore((prevState) => prevState + 1);
    }
    console.log(e.target);
    console.log(localStorage.getItem("RM_Best_Score"));
  }

  useEffect(() => {
    const array = [...gameArray];
    let shuffle = array.sort((a, b) => 0.5 - Math.random());
    setGameArray(() => {
      return shuffle;
    });
  }, [score]);

  return (
    <div>
      <h1 className="title">Rick and Morty</h1>
      <h1 className="subtitle">Memory Card Game</h1>
      <div className="scorebox">
        <div className="score">Score: {score}</div>
        <div className="best-score">
          Best Score: {localStorage.getItem("RM_Best_Score") || bestScore}
        </div>
      </div>
      <div className="author">
        {" "}
        Created by <a href="https://github.com/Kartohan">Kartohan</a>{" "}
      </div>
      <div className="cardboard">
        {gameArray.map((item) => (
          <Card
            click={cardclick}
            name={item.name}
            key={item.name}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
