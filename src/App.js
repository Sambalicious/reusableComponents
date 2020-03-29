import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icons from './icons/icons';
import Toastify from './react-toastify/Toastify';
import Modals from './react-toastify/Modals/Modals';

function App() {
  return (
    <div className="App">
      <Icons />
      <Toastify />
      <Modals />
    </div>
  );
}

export default App;
