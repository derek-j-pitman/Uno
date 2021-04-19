import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Cards color="" num="" />
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

// function deck(props) {}

// function cardColor(props)
// {
//     Red,
//     Blue,
//     Yellow,
//     Green,
//     Wild
// }


function deck(){
  const num=['1','2','3'];
  const color=['red','blue'];
  const card=[];
  for (let i=0; i< num.length; i++){

    for (let c=0; c< color.length; c++){
      card.push()
    }
  }

};