import React, { useState } from "react";
import Letter from "./Letter";
import Word from "./Word";
import Sentence from "./Sentence";
import AudioBook from "./AudioBook";
import "./Main.css";

function Main() {
  const [Letterstate, setletter] = useState(null);
  return (
    <div className="Main">
      <div className="header">
        <h1>Accent Access</h1>
        {Letterstate === 1 ? (
        <h1>Letter</h1>
      ) : Letterstate === 2 ? (
        <h1>Words</h1>
      ) : Letterstate === 3 ? (
        <h1>Sentences</h1>
      ) : Letterstate === 4 ? (
        <h1>AudioBooks</h1>
      ) :
      null}
        {Letterstate ? <h1 onClick={() => setletter(null)}>Back</h1> : null}
      </div>
      {Letterstate === 1 ? (
        <Letter />
      ) : Letterstate === 2 ? (
        <Word />
      ) : Letterstate === 3 ? (
        <Sentence />
      ) : Letterstate === 4 ? (
        <AudioBook />
      ) : (
        <div className="body">
          <div className="gridcontainer">
          <div className="grid letter" onClick={() => setletter(1)}
          style= {{ backgroundImage:`url("https://media2.giphy.com/media/TKpibykOSpcZEcc7sM/giphy.gif?cid=790b7611cfe51535c0494fc1879f3474736ae8185e70e033&rid=giphy.gif&ct=g")`}}>
           



            {" "}
            Letter
          </div>
          <div className="grid word" onClick={() => setletter(2)}
          style= {{ backgroundImage:`url("https://c.tenor.com/mrWq7zzn4ugAAAAC/words-text.gif")`}}>
            {" "}
            Word
          </div>
          <div className="grid sentences" onClick={() => setletter(3)}
           style= {{ backgroundImage:`url("https://thumbs.gfycat.com/UnluckyUnawareCockatoo-max-1mb.gif")`}}
           >
            {" "}
            Sentences
          </div>
          <div className="grid storybooks" onClick={() => setletter(4)}
          style= {{ backgroundImage:`url("https://media1.giphy.com/media/RlGaS8l0f4YXbm3eTW/giphy.gif?cid=ecf05e47koqgigzphscrssd8f8pn0t11gvz1ub71au6o2gjf&rid=giphy.gif&ct=g")`}}>
            {" "}
            Story Books
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Main;
