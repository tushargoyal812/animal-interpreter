import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "ð§": "Penguin",
  "ðïļ": "Dove",
  "ðĶ": "Eagle",
  "ðĶ": "Duck",
  "ðĶĒ": "Swan",
  "ðĶ": "Owl",
  "ðĶĐ": "Flamingo",
  "ðĶ": "Peacock",
  "ðĶ": "Parrot",
  "ðļ": "Frog",
  "ð": "Crocodile",
  "ðĒ": "Turtle",
  "ðĶ": "Lizard",
  "ð": "Snake",
  "ðē": "Dragon Face",
  "ð": "Dragon",
  "ð": "See-No-Evil Monkey",
  "ð": "Hear-No-Evil Monkey",
  "ð": "Speak-No-Evil Monkey",
  "ðĩ": "Monkey Face",
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ðķ": "Dog Face",
  "ð": "Dog",
  "ðĶŪ": "Guide Dog",
  "ðĐ": "Poodle",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ðą": "Cat Face",
  "ð": "Cat",
  "": ""
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
