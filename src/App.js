import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartContextProvider from "./context/CartContext";
import OrdenContextProvider from "./context/OrdenContext";
import UserContextProvider from "./context/UserContext";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <OrdenContextProvider>
          <UserContextProvider>
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
                <Route exact path="/signup" component={SignUp} />
                <Route>
                  <h1>Página no encontrada</h1>
                </Route>
              </Switch>
              <Footer />
            </BrowserRouter>
          </UserContextProvider>
        </OrdenContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
