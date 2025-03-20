import React from 'react'
import './style.scss'
import Logo from '../../assets/logo/logo.svg'

function header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="top">
          <a className='a_logo' href="/"><img className='logo' src={Logo} alt="logo" /></a>
          <a className='button' href="#donation"><button>помочь детям</button></a>
        </div>
        <nav>
          <ul>
            <li><a href="#hero">ГЛАВНАЯ</a></li>
            <li><a href="#about">О ФОНДЕ</a></li>
            <li><a href="#proj">ПРОЕКТЫ</a></li>
            <li><a href="#news">НОВОСТИ</a></li>
            <li><a href="#">КОМУ ПОМОЧЬ</a></li>
            <li><a href="#">ПОМОГАЕМ ВМЕСТЕ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default header