import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntiMar from './pages/IntiMar';
import Carta from './pages/Carta';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntiMar />} />
        <Route path="/carta" element={<Carta />} />
      </Routes>
    </Router>
  );
}

export default App;
