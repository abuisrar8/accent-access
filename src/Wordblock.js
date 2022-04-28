import React from "react";
import './Wordblock.css'


function Wordblock({word}) {
  var filter ='';
 for(const [key,value] of Object.entries({word})){
   filter +=`${value}`;
 }
  const speak = new SpeechSynthesisUtterance();
  speak.text = JSON.stringify(filter);
  speak.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "Google UK English Female"; })[0];
  


  return (
    <div className="Wordblock">
      <div className="lettterwords">
        <h1>{word}</h1>
      </div>
      <div className="sound">
        <button onClick={()=>speechSynthesis.speak(speak)}>play</button>
      </div>
    </div>
  );
  
}

export default Wordblock;
