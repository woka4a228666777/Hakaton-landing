import React from 'react'
import './style.scss'
import Project1 from '../../assets/img/Project1.png'
import Project2 from '../../assets/img/Project2.png'
import Project3 from '../../assets/img/Project3.png'
import Project4 from '../../assets/img/Project4.png'
import Project5 from '../../assets/img/Project5.png'
import Project6 from '../../assets/img/Project6.png'

function Project_block() {
  return (
    <section id='proj' className='Project_block'>
        <div className="wrap">
            <div className="titles">
                <h1 className='title_first'>НАШИ ПРОЕКТЫ</h1>
                <h1 className='title_second'>Подопечные благотворительного фонда «Пункт Милосердия»</h1>
            </div>
            <div className="cards">
                <div className="card_row">
                    <div className="card">
                        <img className='photo' src={Project1} alt="" />
                        <div className="info_block">
                            <div className="text">
                                <h2>Огузбаев Амир</h2>
                                <p>Диагноз: <br />
                                    Первичный иммунодефицит: Х-сцепленный 
                                    лимфопролиферативный 
                                    синдром 3 типа. Иммунная тромбоцитопения, 
                                    тяжелая степень, вне обострения. 
                                    Иммунная нейтропения, медикаментозная ремиссия. 
                                    Хронически текущий 
                                    первичный туберкулез множественных локализаций. 
                                    OU-миопия слабой 
                                    степени.</p>
                            </div>
                            <a className='button' href="#donation">ПОМОЧЬ ДЕТЯМ</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className='photo' src={Project2} alt="" />
                        <div className="info_block">
                            <div className="text">
                                <h2>Скуратов Дима</h2>
                                <p>
                                    Диагноз: <br />
                                    ДЦП: спастическая диплегия. GMFCS IV. 
                                    Врожденный порок развития левого предплечья 
                                    и кисти, лучевая косорукость, гипоплазия I пальца 
                                    левой кисти. Гастроэзофагеальный рефлюкс, 
                                    скользящая грыжа пищеводного 
                                    отверстия диафрагмы.</p>
                            </div>
                            <a className='button' href="#donation">ПОМОЧЬ ДЕТЯМ</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className='photo' src={Project3} alt="" />
                        <div className="info_block">
                            <div className="text">
                                <h2>Задорин Ян</h2>
                                <p>Диагноз: <br />
                                    Правосформированное праворасположенное сердце. 
                                    Корригированный ВПС. Инверсия желудочков. 
                                    Единое предсердие. Стеноз легочной артерии.</p>
                            </div>
                            <a className='button' href="#donation">ПОМОЧЬ ДЕТЯМ</a>
                        </div>
                    </div>
                </div>
                <div className="card_row">
                    <div className="card">
                        <img className='photo' src={Project4} alt="" />
                        <div className="info_block">
                            <div className="text">
                                <h2>Устинова Аня</h2>
                                <p>Диагноз: <br />  
                                    РАК! Двусторонняя ретинобластома 
                                    обоих глаз, рецидив.</p>
                            </div>
                            <a className='button' href="#donation">ПОМОЧЬ ДЕТЯМ</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className='photo' src={Project5} alt="" />
                        <div className="info_block">
                            <div className="text">
                                <h2>Культаев Даниаль</h2>
                                <p>Диагноз: <br />
                                    Первичный иммунодефицит: Х-сцепленный 
                                    лимфопролиферативный синдром 3 типа. 
                                    Цитомегаловирусная инфекция (виремия), 
                                    реконвалесцент. Железодефицитная анемия 
                                    легкой степени тяжести.</p>
                            </div>
                            <a className='button' href="#donation">ПОМОЧЬ ДЕТЯМ</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className='photo' src={Project6} alt="" />
                        <div className="info_block">
                            <div className="text">
                                <h2>Соболева Элина</h2>
                                <p>Диагноз: <br />
                                    РАК! Двусторонняя ретинобластома.</p>
                            </div>
                            <a className='button' href="#donation">ПОМОЧЬ ДЕТЯМ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project_block