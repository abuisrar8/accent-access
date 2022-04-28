import React,{useState} from "react";
import './Letter.css'

function fun(letter0) {
  var filter ='';
 for(const [key,value] of Object.entries({letter0})){
   filter +=`${value}`;
 }
  const speak = new SpeechSynthesisUtterance();
  speak.text = JSON.stringify(filter);
  speak.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "Google UK English Female"; })[0]
  speechSynthesis.speak(speak);
}

function Lettergif(data,url,gif){
  var linkStyle;
  const [bg, setbg] = useState(false)
  if(bg){
 linkStyle ={
   backgroundImage:`url(${gif})`
 }}
 else{
  linkStyle ={
    backgroundImage:`url(${url})`
  }
}




  return (
    <div className="gridLetter" 
  onClick={()=>{fun(data)}}
  
  onMouseEnter={()=>{setbg(true)}}
  onMouseLeave={()=>{setbg(false)}}

  style= {linkStyle} ></div>);
}
  


function Letter() {
  const letters = require("./RawData/letters");
 
 
   
  const grid = letters.map((letter) => 
  Lettergif(letter.data,letter.url,letter.gif));
  

  


    return(
        <div className = "letter">
          <div className="letterbody">
         {grid}
          
          </div>
        </div>
    );

}
export default Letter;