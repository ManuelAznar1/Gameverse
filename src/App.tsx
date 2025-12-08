import { useState } from 'react'
//import './App.css'
import PaginaRegistro from './PaginaRegistro'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PaginaLogin from './PaginaLogin';

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/registro" element={<PaginaRegistro />} />
        <Route path="/login" element={<PaginaLogin />} />
      </Routes>
    </Router>
  )
}

export default App
