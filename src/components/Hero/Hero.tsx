import React from 'react'
import './style.scss'

function Hero() {
  return (
    <section id='hero' className='Hero'>
        <div className="content">
            <div className="text_button">
                <div className="wrap">
                    <div className="text">
                        <h2>БЛАГОТВОРИТЕЛЬНЫЙ ФОНД</h2>
                        <h1>ПУНКТ МИЛОСЕРДИЯ</h1>
                        <p>
                            Благотворительный фонд – эффективная платформа для осуществления 
                            взаимодействия благотворителей и меценатов с получателями помощи. 
                            Благотворительный фонд 
                            вселяет веру и надежду, которая воплощается в реальных делах. 
                            Основа реализации 
                            программ благотворительного фонда - эффективная практика
                            благотворительности.
                        </p>
                    </div>
                    <button>ПРИСОЕДИНЯЙСЯ</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero