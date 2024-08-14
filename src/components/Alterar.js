import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CButton, CContainer, CForm, CFormInput, CFormLabel } from '@coreui/react';
import logo from '../assets/logo.png';
import '../styles/Alterar.css';
import api from '../api';

export default function Alterar() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContato = async () => {
      try {
        const response = await api.get(`/contatos/${id}`);
        const contato = response.data;
        setNome(contato.nome);
        setEmail(contato.email);
        setTelefone(contato.telefone);
      } catch (error) {
        console.error('Erro ao buscar contato:', error);
      }
    };

    fetchContato();
  }, [id]);

  const handleAlterar = async () => {
    try {
      await api.put(`/contatos/${id}`, { nome, email, telefone });
      console.log('Contato alterado com sucesso');
      navigate('/home');
    } catch (error) {
      console.error('Erro ao alterar o contato:', error);
    }
  };

  const handleExcluir = async () => {
    try {
      await api.delete(`/contatos/${id}`);
      console.log('Contato excluído com sucesso');
      navigate('/home');
    } catch (error) {
      console.error('Erro ao excluir o contato:', error);
    }
  };

  return (
    <div className="alterar-container">
      <div className="alterar-left">
        <img src={logo} alt="Marca" className="alterar-logo" />
      </div>
      <div className="alterar-right">
        <CContainer className="text-center">
          <div className="form-container">
            <h2>CADASTRO</h2>
            <CForm>
              <div className="form-field">
                <CFormLabel>Nome</CFormLabel>
                <CFormInput
                  className="input-field"
                  type="text"
                  placeholder="Digite o nome..."
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </div>
              <div className="form-field">
                <CFormLabel>Email</CFormLabel>
                <CFormInput
                  className="input-field"
                  type="email"
                  placeholder="Digite o e-mail..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <CFormLabel>Telefone</CFormLabel>
                <CFormInput
                  className="input-field"
                  type="tel"
                  placeholder="Digite o telefone..."
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                />
              </div>
              <CButton color="primary" className="alterar-button" onClick={handleAlterar}>Alterar</CButton>
              <CButton color="danger" className="excluir-button" onClick={handleExcluir}>Excluir</CButton>
            </CForm>
          </div>
        </CContainer>
      </div>
    </div>
  );
}
