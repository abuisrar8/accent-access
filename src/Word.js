import React, { useState } from "react";
import "./Word.css";
import Wordblock from "./Wordblock";

function Word() {
    /*const [startLetter, setstartLetter] = useState("A".toLowerCase);*/
  var Letters = [
    "a",    "b",    "c",    "d",    "e",    "f",    "g",    "h",    "i",
    "j",    "k",    "l",    "m",    "n",    "o",    "p",    "q",    "r",
    "s",    "t",    "u",    "v",    "w",    "x",    "y",    "z",
  ];
  var [startLetter, setstartLetter] = useState('a');
  console.log(startLetter);
  var listLetter = Letters.map((letter) => (
    <div 
    className="gridLetter"
    onClick={() => setstartLetter(letter)}
    >{letter}</div>
    
  ));
  const words = require("an-array-of-english-words");
  const listItems = words
    .filter((wordByLetter) => wordByLetter
    .startsWith(startLetter))
    .map((word) => <Wordblock word={word} />);
  return (
    <div className="word">
      <div className="left">
        <div className="sidebar">
          {listLetter}
        </div>
      </div>
      <div className="bodyword">{listItems}</div>
    </div>
  );
}
export default Word;
