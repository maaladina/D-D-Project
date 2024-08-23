import React from 'react';
import UsersPage from './components/UsersPage';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<UsersPage />} />
        <Route path="registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
