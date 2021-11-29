import { createContext, useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../service/getFirestore";

export const OrdenContext = createContext();

const OrdenContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [idUsuario, setIdUsuario] = useState("");

  const handleNameChange = (event) => setName(event.target.value);

  const handleMailChange = (event) => setMail(event.target.value);

  const handlePhoneChange = (event) => setPhone(event.target.value);
  let orden = {};

  const getOrder = (e, cart, total) => {
    e.preventDefault();
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = { name: name, mail: mail, phone: phone };
    orden.total = total;
    orden.items = cart.map((item) => {
      const id = item.id;
      const nombre = item.name;
      const precio = item.price * item.cantidad;
      return { id, nombre, precio };
    });

    const dbQuery = getFirestore();
    dbQuery
      .collection("orders")
      .add(orden)
      .then((res) => setIdUsuario(res.id));

    console.log(idUsuario);
  };

  return (
    <OrdenContext.Provider
      value={{
        name,
        mail,
        phone,
        handleMailChange,
        handleNameChange,
        handlePhoneChange,
        idUsuario,
        setIdUsuario,
        getOrder,
      }}
    >
      {children}
    </OrdenContext.Provider>
  );
};

export default OrdenContextProvider;
