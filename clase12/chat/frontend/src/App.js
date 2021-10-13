import { useState, useEffect } from 'react';
import './App.css';
import io from "socket.io-client";
import Table from "./components/Table/Table";

const socket = io.connect();

function App() {
  const [data, setData] = useState({
    author: "",
    message: ""
  })

  const addMessage = (e) => {
    e.preventDefault()
    socket.emit('new-message', data);
    return false
  }

  socket.on('messages', (data) => {
    console.log("recibi un mensaje")
    // alert(JSON.stringify(data)) 
  })

  return (
    <>
      <form onSubmit={(e) => addMessage(e)} className="App">
        <input
          type="text"
          placeholder="nombre"
          onChange={(e) => setData(prevState => ({ ...prevState, author: e.target.value }))} />
        <input
          type="text"
          placeholder="texto" />
        <input type="submit" value="enviar" />
      </form>
      <Table
        items={products}
        totalItems={products.length}
        fieldAndHeaders={{
          Nombre: "name",
          Precio: "price"
        }}
      />
    </>

  );
}

export default App;
