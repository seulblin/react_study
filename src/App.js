import React from 'react';
import Hello from './hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black', 
    color:'aqua', 
    fontSize: 24,
    padding:'1rem'
  }
  return (
    <>
      <div>{name}</div>
      <div style = {style}><Hello /></div>
      <div className="gray-box"></div>
    </> 
  );
}

export default App;
