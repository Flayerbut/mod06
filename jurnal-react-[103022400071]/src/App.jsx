import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
const NAMA_PANGGILAN = 'Ryan';
const n = 71;

function App() {
  const jam = 9;

  return (
    <>
      <section id="center">
        <div>
          <h1 className= 'judul' style={gayaJudul}> Kantin Ryan</h1>
          <p> { jam < 12 ? 'Selamat Pagi' : 'Selamat Pagi'} </p>
          <p> Saldo awal kartu kantin: RP {( N * 1000)} </p>




        </div>
  </>
  )
}
          
         