import React from 'react'
import './style.scss'
import Photo1 from '../../assets/img/TeamFirst.png'
import Photo2 from '../../assets/img/TeamSecond.png'
import Photo3 from '../../assets/img/TeamThird.png'

function Team() {
  return (
    <section id='team' className='Team'>
        <div className="wrap">
            <h1>Наша команда</h1>
            <div className="cards">
                <div className="card">
                    <img className='photo' src={Photo1} alt="Photo1" />
                    <div className="bottom">
                        <div className="text">
                            <h2>Пиряева Лариса<br />
                            Анатольевна</h2>
                            <p>директор благотворительного <br />
                            фонда</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className='photo' src={Photo2} alt="Photo1" />
                    <div className="bottom">
                        <div className="text">
                            <h2>Собачникова Мария<br />
                            Сергеевна</h2>
                            <p>председатель попечительского<br />
                            совета</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className='photo' src={Photo3} alt="Photo1" />
                    <div className="bottom">
                        <div className="text">
                            <h2>Макловер Савелий<br />
                            Максимович</h2>
                            <p>член попечительского <br />
                            совета</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team