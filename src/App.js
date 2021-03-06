import React from 'react';
import './App.css';
import SecondPage from './components/SecondPage';
import ChannelComponents from './components/ChannelComponent';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
            <Header />
            <SecondPage />
      <ChannelComponents />
    </div>
  );
}

export default App;
