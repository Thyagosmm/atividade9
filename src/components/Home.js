// Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import { cilPeople, cilPlus, cilExitToApp } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import logo from "../assets/logo.png";
import "../styles/Home.css";
import api from "../api";
import { auth, signOut } from "../firebase/firebaseAuth"; // Importa signOut

export default function Home() {
  const [contatos, setContatos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        const response = await api.get("/contatos");
        setContatos(response.data);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };

    fetchContatos();
  }, []);

  const handleContatoClick = (contatoId) => {
    navigate(`/alterar/${contatoId}`);
  };

  const handleAddContato = () => {
    navigate("/cadastrarcontato");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redireciona para a página de login após o logout
    } catch (error) {
      console.error("Erro ao sair:", error.message);
    }
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <img src={logo} alt="Marca" className="home-logo" />
      </div>
      <div className="home-right">
        <CCard className="contato-card">
          <CCardHeader className="contato-card-header">
            <h2>
              <CIcon icon={cilPeople} className="header-icon" /> User
            </h2>
            <div className="button-group">
              <CButton
                color="primary"
                className="add-button"
                onClick={handleAddContato}
              >
                <CIcon icon={cilPlus} className="add-icon" /> <span>ADD</span>
              </CButton>
              <CButton
                color="danger"
                className="logout-button"
                onClick={handleLogout}
              >
                <CIcon icon={cilExitToApp} className="logout-icon" />{" "}
                <span>SAIR</span>
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CListGroup className="contato-list">
              {contatos.length > 0 ? (
                contatos.map((contato) => (
                  <CListGroupItem
                    key={contato.id}
                    className="contato-item"
                    onClick={() => handleContatoClick(contato.id)}
                    action
                  >
                    <strong>{contato.nome}</strong>
                    <p>{contato.email}</p>
                  </CListGroupItem>
                ))
              ) : (
                <p>Não há contatos cadastrados.</p>
              )}
            </CListGroup>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
}
