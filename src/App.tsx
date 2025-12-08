import { useState } from 'react'
//import './App.css'
import PaginaRegistro from './PaginaRegistro'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PaginaLogin from './PaginaLogin';
import PaginaPrincipal from './PaginaPrincipal';

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<PaginaRegistro />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/home" element={<PaginaPrincipal/>} />
      </Routes>
    </Router>
  )
}

export default App
