import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/cadastroTema';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/temas' element={<ListaTema />} />
        <Route path='/postagem' element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPost />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
        <Route path="/formularioTema" element={<CadastroTema />} />
        <Route path="/formularioTema/:id" element={<CadastroTema />} />
        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        <Route path="/deletarTema/:id" element={<DeletarTema />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;