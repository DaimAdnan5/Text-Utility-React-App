import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <main className={`App${isDarkMode ? ' App-dark' : ''}`}>
      <Navbar
        title="Text Utility"
        about="About Us"
        contact="Contact Us"
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((isDark) => !isDark)}
      />
      {alertMessage && (
        <Alert message={alertMessage} onClose={() => setAlertMessage('')} />
      )}
      <Routes>
        <Route path="/home" element={<TextForm onSuccess={setAlertMessage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </main>
  );
}

export default App;
