import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import About from './pages/About';
import Rates from './pages/Rates';
import Home from './pages/Home';
import Register from './pages/Sitters';
import Contact from './pages/Contact';
import CreatePosting from './postings/New';
import SitterPage from './pages/SitterPage';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sitters" element={<Register/>} />
        <Route path="/about" element={<About />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookus" element={<CreatePosting />} />
        <Route path="/sitter/:index" element={<SitterPage />} />
      </Routes>
    </div>
  );
}

export default App;
