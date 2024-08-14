import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CadastroUsuario from "./components/CadastroUsuario";
import Home from "./components/Home";
import Alterar from "./components/Alterar";
import CadastroContato from "./components/CadastroContato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />
        <Route path="/" element={<Login />} />
        <Route path="/alterar/:id" element={<Alterar />} />
        <Route path="/cadastrarcontato" element={<CadastroContato />} />
      </Routes>
    </Router>
  );
}

export default App;
