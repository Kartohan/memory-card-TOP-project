import React, { useState, useEffect } from "react";
import Card from "./Card";

const Game = () => {
  const [gameArray, setGameArray] = useState([]);
  const charArray = [
    {
      name: "Cousin Nicky",
      img: "",
    },
    {
      name: "Mr. Beauregard",
      img: "",
    },
    {
      name: "Frankenstein",
      img: "",
    },
    {
      name: "Sleepy Gary",
      img: "",
    },
    {
      name: "Photography Raptor",
      img: "",
    },
    {
      name: "Pencilvester",
      img: "",
    },
    {
      name: "Tinkles",
      img: "",
    },
    {
      name: "Hamurai",
      img: "",
    },
    {
      name: "Amish Cyborg",
      img: "",
    },
    {
      name: "Reverse Giraffe",
      img: "",
    },
    {
      name: "Ghost in a Jar",
      img: "",
    },
    {
      name: "Baby Wizard",
      img: "",
    },
  ];

  const [score, setScore] = useState(0);

  function cardclick(e) {
    setScore((prevState) => {
      return prevState + 1;
    });
  }

  useEffect(() => {
    let array = [...charArray];
    let shuffle = array.sort((a, b) => 0.5 - Math.random());
    setGameArray(() => {
      return shuffle;
    });
  }, [score]);

  return (
    <div>
      {gameArray.map((item) => (
        <Card click={cardclick} name={item.name} key={item.name} />
      ))}
    </div>
  );
};

export default Game;
