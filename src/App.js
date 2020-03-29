import React from 'react';

import './App.css';
import Icons from './icons/icons';
import Toastify from './react-toastify/Toastify';
import Modals from './react-toastify/Modals/Modals';
import Tooltip from './Tooltip/ToolTips';
import CountUpOne from './Countup/CountUpOne';
import IdleTimers from './idleTimers/IdleTimers';
import DatePickers from './DateSelector/DatePicker';

function App() {
  return (
    <div className="App">
      <Icons />
      <Toastify />
      <Modals />  
      <Tooltip />
      <CountUpOne />
      <IdleTimers />
      <DatePickers />
    </div>
  );
}

export default App;
