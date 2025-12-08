import { useState } from 'react'
import PaginaRegistro from './PaginaRegistro'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PaginaLogin from './PaginaLogin';
import PaginaPrincipal from './PaginaPrincipal';
import PaginaPerfil from './Perfil';

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<PaginaRegistro />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/home" element={<PaginaPrincipal/>} />
        <Route path="/perfil" element={<PaginaPerfil />} />
      </Routes>
    </Router>
  )
}

export default App
