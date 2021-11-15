import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />

          <Route
            exact
            path="/category/:categoryId"
            component={ItemListContainer}
          />
          <Route exact path="/item/:itemId" component={ItemDetailContainer} />
          <Route>
            <h1>Página no encontrada</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
