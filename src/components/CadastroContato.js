import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CButton, CContainer, CForm, CFormInput, CFormLabel } from '@coreui/react';
import api from '../api';
import logo from '../assets/logo.png';
import '../styles/CadastroContato.css';

export default function CadastroContato() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const navigate = useNavigate();

  async function handleCadastro() {
    try {
      const response = await api.post('/contatos', { nome, email, telefone });
      console.log('Contato cadastrado:', response.data);
      setNome('');
      setEmail('');
      setTelefone('');
      navigate('/home');
    } catch (error) {
      console.error('Erro ao cadastrar o contato:', error);
    }
  }

  return (
    <div className="cadastro-contato-container">
      <div className="cadastro-contato-left">
        <img src={logo} alt="Marca" className="cadastro-contato-logo" />
      </div>
      <div className="cadastro-contato-right">
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
              <CButton color="primary" className="salvar-button" onClick={handleCadastro}>Salvar</CButton>
            </CForm>
          </div>
        </CContainer>
      </div>
    </div>
  );
}
