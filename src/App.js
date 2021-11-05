import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola!" />
      <ItemCount stock={3} />
      <ItemCount stock={10} />
    </div>
  );
}

export default App;
