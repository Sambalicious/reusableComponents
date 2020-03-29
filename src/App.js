import React from 'react';

import './App.css';
import Icons from './icons/icons';
import Toastify from './react-toastify/Toastify';
import Modals from './react-toastify/Modals/Modals';
import Tooltip from './Tooltip/ToolTips';
import CountUpOne from './Countup/CountUpOne';

function App() {
  return (
    <div className="App">
      <Icons />
      <Toastify />
      <Modals />  
      <Tooltip />
      <CountUpOne />
    </div>
  );
}

export default App;
