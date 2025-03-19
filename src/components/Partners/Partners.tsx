import React from 'react'
import './style.scss'
import Marquee from "react-fast-marquee"
import Partner1 from '../../assets/img/Partner1.svg'
import Partner2 from '../../assets/img/Partner2.svg'
import Partner3 from '../../assets/img/Partner3.svg'
import Partner4 from '../../assets/img/Partner4.svg'
import Partner5 from '../../assets/img/Partner5.svg'
import Partner6 from '../../assets/img/Partner6.svg'
import Partner7 from '../../assets/img/Partner7.svg'
import Partner8 from '../../assets/img/Partner8.svg'
import Partner9 from '../../assets/img/Partner9.svg'
import Partner10 from '../../assets/img/Partner10.svg'
import Partner11 from '../../assets/img/Partner11.svg'
import Partner12 from '../../assets/img/Partner12.svg'
import Partner13 from '../../assets/img/Partner13.svg'
import Partner14 from '../../assets/img/Partner14.svg'

function Partners() {
  return (
    <section id='partners' className='Partners'>
        <h1>Наши партнеры</h1>
        <Marquee speed={100} autoFill={true} className='stroka'>
            <img className='Partner_item' src={Partner1} alt="" />
            <img className='Partner_item' src={Partner2} alt="" />
            <img className='Partner_item' src={Partner3} alt="" />
            <img className='Partner_item' src={Partner4} alt="" />
            <img className='Partner_item' src={Partner5} alt="" />
            <img className='Partner_item' src={Partner6} alt="" />
            <img className='Partner_item' src={Partner7} alt="" />
            <img className='Partner_item' src={Partner8} alt="" />
            <img className='Partner_item' src={Partner9} alt="" />
            <img className='Partner_item' src={Partner10} alt="" />
            <img className='Partner_item' src={Partner11} alt="" />
            <img className='Partner_item' src={Partner12} alt="" />
            <img className='Partner_item' src={Partner13} alt="" />
            <img className='Partner_item' src={Partner14} alt="" />
        </Marquee>
    </section>
  )
}

export default Partners