import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ShipmentDetails from './pages/ShipmentDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shipments/:id" element={<ShipmentDetails />} />
      <Route path="*" element={<div className="p-8">404 - Not found</div>} />
    </Routes>
  )
}

export default App

