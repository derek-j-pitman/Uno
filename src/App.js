import "./styles.css";

export default function App() {
  let extraCards = addCustomCards();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <Cards color={cards[0]} num={cards[1]} />
      <Cards color={cards[2]} num={cards[3]} /> */}
      {cards}
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
