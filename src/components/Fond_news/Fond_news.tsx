
import './style.scss'
import newsPhoto1 from '../../assets/img/newsPhoto1.png'
import newsPhoto2 from '../../assets/img/newsPhoto2.png'

function Fond_news() {
  return (
    <section id='news' className="Fond_news">
        <div className="wrap">
            <h1>НОВОСТИ ФОНДА</h1>
            <div className="row">
                <div className="text_left">
                    <h2>Поддержка юных героев: <br />
                    Завершен сбор средств на лечение Маши Ивановой</h2>
                    <p>
                        С радостью сообщаем, что благодаря вашей невероятной поддержке сбор средств на лечение Маши Ивановой успешно завершен! 
                        Маша страдает раком головного мозга, и собранные средства позволят ей пройти необходимый курс терапии за границей. 
                        От имени Маши и ее семьи выражаем вам огромную благодарность за вашу щедрость и сострадание!
                    </p>
                </div>
                <div className="card">
                    <img className='photo' src={newsPhoto1} alt="newsPhoto" />
                    <div className="info_block">
                        <div className="text">
                            <h2>Маша Иванова</h2>
                            <div className="top_text">
                                <p>Опухоль головного мозга с рождения</p>
                                <p>Рак головного мозга</p>
                            </div>
                            <div className="bottom">
                                <div className="bottom_text">
                                    <p>Собрано :</p>
                                    <p>10 000 000 из 10 000 000 рублей</p>
                                </div>
                                <div className="percentage">
                                    100%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="text_left">
                    <h2>Достижения: Открыт новый игровой комплекс в<br />
                    детском онкологическом центре</h2>
                    <p>
                        Благодаря вашим пожертвованиям нам удалось открыть современный игровой комплекс в детском онкологическом центре. Теперь маленькие пациенты смогут отвлечься от больничных процедур, поиграть и пообщаться друг с другом в комфортной и безопасной обстановке. Мы надеемся, что этот комплекс станет местом радости и надежды для детей и их родителей.
                    </p>
                </div>
                <div className="card">
                    <img className='photo' src={newsPhoto2} alt="newsPhoto" />
                    <div className="info_block">
                        <div className="text">
                            <h2>Игровой центр</h2>
                            <div className="top_text">
                                <p>Помоги детям и родителям</p>
                                <p>почувствовать себя счастливыми</p>
                            </div>
                            <div className="bottom">
                                <div className="bottom_text">
                                    <p>Собрано :</p>
                                    <p>560 000 из 560 000 
                                    рублей</p>
                                </div>
                                <div className="percentage">
                                    100%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Fond_news