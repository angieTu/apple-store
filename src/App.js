import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartContextProvider from "./context/CartContext";
import OrdenContextProvider from "./context/OrdenContext";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <OrdenContextProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route
                exact
                path="/category/:categoryId"
                component={ItemListContainer}
              />
              <Route
                exact
                path="/item/:itemId"
                component={ItemDetailContainer}
              />
              <Route exact path="/cart" component={Cart} />
              <Route>
                <h1>Página no encontrada</h1>
              </Route>
            </Switch>
          </BrowserRouter>
        </OrdenContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
