import { useState } from 'react'
import './App.css'
import SponsorsBar from '../components/SponsorBar/sponsor-bar';
import Header from '../components/Header/header';
import Content from '../components/Content/content';

function App() {
  return (
    <>
        {/* Cabeçalho */}
        <Header />

        {/* Painel Principal */}
        <div className='Painel'>
          <div className='CTA'>
            <h3>tech styles</h3>
            <h1>Summer Sale</h1>
            <h1>2025 Collection</h1>
            <button>BUY NOW</button>
          </div>
          <img src="../src/img/guy-main.png" alt="main-img" />
        </div>
        
        {/* Barra de separação do CTA */}
        <div className='CTA-bar'></div>

        {/* Conteudo Principal */}
        <Content />

        {/* Barra de patrocinadores */}
        <SponsorsBar />
        <div className='Footer'></div>
    </>
  )
}

export default App
