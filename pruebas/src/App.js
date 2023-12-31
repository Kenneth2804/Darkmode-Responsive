import logo from './logo.svg';
import './App.css';
import { Componente1 } from './components/Componente1';
import { Componente2 } from './components/Componente2';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar></Navbar>
  <Routes>
    <Route path='/' exact element={<Componente1></Componente1>}></Route>
    <Route path='/componete2' exact element={<Componente2></Componente2>}></Route>
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
