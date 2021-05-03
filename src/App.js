import "./styles.css";

export default function App() {
  let gameDeck = deck();
  let gameDeal = dealDeck(gameDeck)
  return (
    <div className="App">
      <h1>Player 1</h1>
      {gameDeal[0]}
      <h1>Player 2</h1>
      {gameDeal[1]}
      <h1>Player 3</h1>
      {gameDeal[2]}
      <h1>Player 4</h1>
      {gameDeal[3]}
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

function dealDeck(deck){

  var hand = [[],[],[],[]];

  for (let p = 0; p < 4; p++) {
   for (let i = 0; i < 7; i++) {
		
    var randHand = Math.floor(Math.random() * deck.length);


      hand[p].push(...deck.slice(randHand, randHand+1));
    
      deck.splice(randHand, 1);
    
    }
  }

  return [...hand, deck];
};
  


let colors = ["red", "blue"];
let nums = ["1", "2"];
// function deck(props) {}

// function cardColor(props)
// {
//     Red,
//     Blue,
//     Yellow,
//     Green,
//     Wild
// }

// let [hand1, setHand1] = useState([]);

function addCustomCards() {
  let hotCard = <Cards color="hot_pink" num="999" />;
  let coolCard = <Cards color="plaid" num="42" />;
  return [hotCard, coolCard];
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

let cards = deck();

console.log(cards);


