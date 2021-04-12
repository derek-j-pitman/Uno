import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Cards color="yellow" num="5" />
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

function deck(props) {}

// function cardColor(props)
// {
//     Red,
//     Blue,
//     Yellow,
//     Green,
//     Wild
// }
