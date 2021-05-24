import React, { useState } from "react";
import "./styles.css";

const numPlayers = 4;
const gameDeck = deck();
let gameDeal = dealDeck(gameDeck);
let topC = topCard(gameDeal[4])[0];
var discard = [];

export default function App() {
  let [turn, setTurn] = useState(0);
  console.log(gameDeal);

  if (gameDeal[4].length === 0) {
    gameDeal[4] = discard;
    discard = [];
  }

  return (
    <div className="App">
      <h1>Current turn: Player {turn + 1}</h1>
      <h1>Player {turn + 1}'s Hand:</h1>
      {gameDeal[turn].map((c, i) => (
        <Cards
          color={c.color}
          num={c.num}
          player={gameDeal[turn]}
          cardInd={i}
          turn={turn}
          setTurn={setTurn}
        />
      ))}

      <h1>Top Card</h1>
      <div>
        {topC.color} {topC.num}
      </div>
      <h1>Can't play?</h1>
      <Draw
        pile={gameDeal[4]}
        player={gameDeal[turn]}
        setTurn={setTurn}
        turn={turn}
      />
    </div>
  );
}

function Cards(props) {
  return (
    <button
      disabled={props.color !== topC.color && props.num !== topC.num}
      onClick={() => {
        dealDiscard(topC);
        makeTop(playedCard(props.player, props.cardInd));
        props.setTurn((props.turn + 1) % numPlayers);
      }}
    >
      {props.color} {props.num}
    </button>
  );
}

// Input: array of Cards components
// Output: array of five arrays of Cards components
//         first four are hands for players
//         remainder is the draw pile

function dealDeck(deck) {
  var hand = [[], [], [], []];

  for (let p = 0; p < 4; p++) {
    for (let i = 0; i < 7; i++) {
      hand[p].push(...drawCardFromPile(deck));
    }
  }

  return [...hand, deck];
}

// Input: Array of Cards components, modified in-place
// Output: A random Cards component from the input array
// The output card is no longer in the array after this function
function drawCardFromPile(pile) {
  var pileDraw = Math.floor(Math.random() * pile.length);
  var card = pile.slice(pileDraw, pileDraw + 1);
  pile.splice(pileDraw, 1);
  return card;
}

function playedCard(hand, card) {
  var movingCard = hand.slice(card, card + 1);
  hand.splice(card, 1);
  return movingCard;
}

function makeTop(movingCard) {
  topC = movingCard[0];
}

function dealDiscard(top) {
  discard.push(top);
}

function topCard(deck) {
  return drawCardFromPile(deck);
}

function dealDrawPile(pile, player) {
  player.push(...drawCardFromPile(pile));
}

function Draw(props) {
  return (
    <div>
      <button
        onClick={() => {
          dealDrawPile(props.pile, props.player);
          props.setTurn((props.turn + 1) % numPlayers);
        }}
      >
        Draw
      </button>
    </div>
  );
}

function deck() {
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const color = ["red", "blue", "green", "yellow"];
  const card = [];
  for (let i = 0; i < num.length; i++) {
    for (let c = 0; c < color.length; c++) {
      // card.push(num[i],color[c]);
      card.push({ color: color[c], num: num[i] });
      //let cardss = <Cards color={color[c]} num={num[i]} />;
      //card.push(cardss);
    }
  }
  return card;
}
