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
  function cardclick(e) {
    return console.log(e.target.innerText);
  }

  // setGameArray(() => {
  //   let array = gameArray;
  //   let shuffle = array.sort((a, b) => 0.5 - Math.random());
  //   return { gameArray: shuffle };
  // });

  useEffect(() => {
    let array = charArray;
    let shuffle = array.sort((a, b) => 0.5 - Math.random());
    setGameArray(() => {
      return { shuffle };
    });
  }, []);

  return (
    <div>
      <Card name={gameArray[0].name} />
      {/* <Card name={gameArray[1].name} />
      <Card name={gameArray[2].name} />
      <Card name={gameArray[3].name} />
      <Card name={gameArray[4].name} />
      <Card name={gameArray[5].name} />
      <Card name={gameArray[6].name} />
      <Card name={gameArray[7].name} />
      <Card name={gameArray[8].name} />
      <Card name={gameArray[9].name} />
      <Card name={gameArray[10].name} />
      <Card name={gameArray[11].name} /> */}
    </div>
  );
};

export default Game;
