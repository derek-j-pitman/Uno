import React, { useState } from "react";
import "./styles.css";

const numPlayers = 4;
const gameDeck = deck();
const gameDeal = dealDeck(gameDeck);
const top = topCard(gameDeal[4]);

export default function App() {
  let [turn, setTurn] = useState(0);
  let [player1, setPlayer1] = useState(gameDeal[0]);
  let [player2, setPlayer2] = useState(gameDeal[1]);
  let [player3, setPlayer3] = useState(gameDeal[2]);
  let [player4, setPlayer4] = useState(gameDeal[3]);
  let [drawPile, setDrawPile] = useState(gameDeal[4]);
  let playerStates = [player1, player2, player3, player4];
  let setPlayerStates = [setPlayer1, setPlayer2, setPlayer3, setPlayer4];
  return (
    <div className="App">
      <h1>Current turn: Player {turn + 1}</h1>
      <h1>Player {turn + 1}'s Hand:</h1>
      {playerStates[turn]}
      <Draw
        pile={drawPile}
        player={gameDeal[turn]}
        setTurn={setTurn}
        turn={turn}
      />
      <h1>Top Card</h1>
      {top}
    </div>
  );
}

function Cards(props) {
  return (
    <div>
      This card is a {props.color} {props.num}
    </div>
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

function dealDiscard(card) {
  var discard = [];
  discard.push(card);
  return discard;
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
      let cardss = <Cards color={color[c]} num={num[i]} />;
      card.push(cardss);
    }
  }
  return card;
}
