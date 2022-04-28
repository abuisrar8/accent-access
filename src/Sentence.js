import React, { useState } from "react";
import './Sentence.css';
import Wordblock from "./Wordblock";




function Sentence() {
  
  var PhrasesList = ["significant-phrases","felicitous-phrases","prepositional-phrases-of","prepositional-phrases-by","prepositional-phrases-in",
"prepositional-phrases-into", "prepositional-phrases-to","prepositional-phrases-with","business-phrases","public-speaking-phrases"];
  var [phrasesIndex, setphrasesIndex] = useState("significant-phrases");
  var listPhrase = PhrasesList.map((phrase)=> (
    <div 
    className="gridLetter"

    onClick={()=> setphrasesIndex(phrase)}
    >{phrase}</div>
    
  ));
  console.log(phrasesIndex);
  var phrases = require(`./RawData/${phrasesIndex}.json`);
 
  var listItems = phrases.map((phrase) => <Wordblock word={phrase}/>);
  

  
    return(
        <div className = "sentence">
          
          <div className="left">
        <div className="sidebar">
          {listPhrase}
        </div>
      </div>
      <div className="bodyword">
        {listItems}
      </div>
        </div>
    );

}
export default Sentence;