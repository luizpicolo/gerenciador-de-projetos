import React from 'react';
import Header from './components/header';
import Tasks from './components/task';
import Button from './components/button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Gerenciador de Projetos" />
      <Tasks />      
      <Button />
    </div>
  );
}

export default App;
