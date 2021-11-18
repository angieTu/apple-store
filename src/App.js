import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartContextProvider from "./context/CartContext";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route
              exact
              path="/category/:categoryId"
              component={ItemListContainer}
            />
            <Route exact path="/item/:itemId" component={ItemDetailContainer} />
            <Route exact path="/cart" component={CartWidget} />
            <Route>
              <h1>Página no encontrada</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
