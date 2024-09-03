import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaLogin } from './telas/Login/Login';
import { TelaRegistro } from './telas/Registro/Registro';
import { MaterialDesignProvider } from './contexts/useDesign';
import { AutenticacaoProvider } from './contexts/useAutenticacao';
import { TelaInicio } from './telas/Inicio/Inicio';
import { CadastroDeProduto } from './telas/CadastroDeProduto/CadastroDeProduto';
import Layout from './componentes/Layout/Layout';

const App: React.FC = () => {
  return (
    <MaterialDesignProvider>
      <AutenticacaoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/registro" element={<TelaRegistro />} />
            <Route element={<Layout />}>
              <Route path='/telaInicio' element={<TelaInicio />} />
              <Route path='/cadastroDeProduto' element={<CadastroDeProduto />} />
            </Route>
          </Routes>
        </Router>
      </AutenticacaoProvider>
    </MaterialDesignProvider>
  );
}

export default App;
