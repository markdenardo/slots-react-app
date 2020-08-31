import React, { useState } from 'react';
import './App.css';

function App() {

  const cardArr = ['🂠', '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂸', '🂩', '🂪', '🂫', '🂬', '🂭', '🂮', '🂱', '🂲', '🂳', '🂴', '🂵', '🂷', '🂸', '🂹', '🂺', '🂻', '🂼', '🂼', '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃉', '🃊', '🃋', '🃌', '🃍', '🃎', '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃜', '🃝', '🃞', '🃟'];
 
  const [cards, setCards] = useState([
    ['a','b','c']
  ]);

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const buttonDown = () => {
    for(let i=0; i<3; i++){
      getRandomCard();
    }
  }

  const getRandomCard = (cards) => {
    let randomCard = cardArr[getRandomInt(cardArr.length)];
    console.log("clicked");
    console.log(randomCard);
    setCards();
    return <h2>{randomCard}</h2>
  }


  return (
    <div className="App">
      <header className="App-header">
        SLOTS
        <h1>
          {cards}
        </h1>
        <span>
          <button onClick = {buttonDown}>start spinning</button>
          <button onClick ={()=>setCards(getRandomCard)}>setState</button>
        </span>  
      </header>
      
    </div>
  );
}

export default App;
