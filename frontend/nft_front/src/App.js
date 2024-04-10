
import { Routes, Route, Router, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateNFT from './components/CreateNFT';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createNFT" element={<CreateNFT />} />
      </Routes>
  );
}

export default App;
