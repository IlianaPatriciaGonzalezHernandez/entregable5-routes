import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'


const Home = () => {
  return (
    <article className='pokedex'>
    <img className='pokedex__img' src="/src/pages/images/home/pokedex.png" alt="" />
    <header className='pokedex__header'>
    <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
    <p className='pokedex__text'>Gime me your name to see the pokemon.</p>
    </header>
    <FormHome />
    <footer className='footer_pokedex1'>
      <div className='pokedex-border-red1'></div>
       <div className='pokedex-border-black1'></div>
       <div className='podex-eclipce11'></div>
       <div className='podex-eclipce21'></div>
      </footer>
    </article>
  )
}

export default Home