import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🐧": "Penguin",
  "": "",
  "🕊️": "Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat"
};

var Animals = Object.keys(animalDictionary);

export default function App() {
  var headingText = "Animal enterpreter";

  const [userInput, setUserInput] = useState(" ");

  function onChangeHandler(event) {
    var input = event.target.value;
    var meaning = animalDictionary[input];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setUserInput(meaning);
  }
  function onClickHandler(item) {
    var animalsName = animalDictionary[item];
    setUserInput(animalsName);
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: "cursive" }}>{headingText}</h1>
      <input onChange={onChangeHandler} />
      <div style={{ fontFamily: "cursive", fontSize: "1.5rem" }}>
        {userInput}
      </div>
      <h3 style={{ fontSize: "1.5rem", fontFamily: "cursive" }}>
        Animals we know
      </h3>
      {Animals.map(function (item) {
        return (
          <span
            onClick={() => onClickHandler(item)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
