import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaLogin } from './telas/Login/Login'; // Ajuste os caminhos conforme necessário
import { TelaRegistro } from './telas/Registro/Registro';
import { MaterialDesignProvider } from './contexts/useDesign'; // Ajuste o caminho conforme necessário

const App: React.FC = () => {
  return (
    <MaterialDesignProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/registro" element={<TelaRegistro />} />
        </Routes>
      </Router>
    </MaterialDesignProvider>
  );
}

export default App;
