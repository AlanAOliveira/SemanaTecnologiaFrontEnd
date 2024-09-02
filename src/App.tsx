import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaLogin } from './telas/Login/Login';
import { TelaRegistro } from './telas/Registro/Registro';
import { MaterialDesignProvider } from './contexts/useDesign';
import { AutenticacaoProvider } from './contexts/useAutenticacao';
import { TelaInicio } from './telas/Inicio/Inicio';

const App: React.FC = () => {
  return (
    <MaterialDesignProvider>
      <AutenticacaoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/registro" element={<TelaRegistro />} />
            <Route path='/telaInicio' element={<TelaInicio />} />
          </Routes>
        </Router>
      </AutenticacaoProvider>
    </MaterialDesignProvider>
  );
}

export default App;
