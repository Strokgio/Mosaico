import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Mosaico from './components/mosaico';
import Main from './components/main';
import MosaicoContainer from './components/MosaicoContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Mosaico/>
      <Footer/>
    </div>
  );
}

export default App;
