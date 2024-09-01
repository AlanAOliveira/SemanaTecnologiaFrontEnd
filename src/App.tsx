import { TelaLogin } from './telas/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaRegistro } from './telas/Registro/Registro';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/registro" element={<TelaRegistro />} />
      </Routes>
    </Router>
  );
}

export default App;