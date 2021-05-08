import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🐧": "Penguin",
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
  var color = "blue";

  const [userInput, setUserInput] = useState(" ");

  function onChangeHandler(event) {
    var input = event.target.value;
    var meaning = animalDictionary[input];
    setUserInput(meaning);
  }
  function onClickHandler(item) {
    var animalsName = animalDictionary[item];
    setUserInput(animalsName);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>{headingText}</h1>
      <input onChange={onChangeHandler} />
      <div>{userInput}</div>
      <h3>Animals we know</h3>
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

/*charactor.map(function (item) {
  return (
    <span
      onClick={() => onClickHandler(item)}
      style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
      key={item}
    >
      {item}
    </span>
  );
})*/
