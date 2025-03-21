
import './style.scss'
import Logo from '../../assets/img/Icon_logo.svg'
import Events_photo1 from '../../assets/img/Events1.png'
import Events_photo2 from '../../assets/img/Events2.png'
import Events_photo3 from '../../assets/img/Events3.png'

function Events_block() {
  return (
    <section id='events_block' className='Events_block'>
        <div className="wrap">
            <div className="first_block">
                <div className="texts">
                    <h2>Исполняем мечту каждого ребенка вместе</h2>
                    <p className='text_first_block'>Каждый из наших детей хочет почувствовать себя счастливыми и забыть о трудностях, хоть на время.Мы даем им возможность осуществить это в реальность.У кого то это побывать на море или встретиться с тем кем восхищаешься, мы исполняем их желание вместе с вами!
                    </p>
                </div>
                <div className="block_button">
                    <div className="icon_text">
                        <h3>Исполним желание вместе</h3>
                        <img className='icon' src={Logo} alt="" />
                    </div>
                    <button className='first_block_button'>Помочь</button>
                </div>
            </div>
            <div className="second_block">
                <h1>БЛАГОТВОРИТЕЛЬНЫЕ МЕРОПРИЯТИЯ</h1>
                <div className="cards">
                    <div className="card">
                        <img className='card_photo' src={Events_photo1} alt="" />
                        <div className="card_text">
                            <h4>Аукцион детских<br />поделок</h4>
                            <p className='text_card'>1 июня 2025 года</p>
                        </div>
                        <button className='card_button'>Участвовать</button>
                    </div>
                    <div className="card">
                        <img className='card_photo' src={Events_photo2} alt="" />
                        <div className="card_text">
                            <h4>Благотворительный <br /> концерт </h4>
                            <p className='text_card'>25 июля 2025 года</p>
                        </div>
                        <button className='card_button'>Участвовать</button>
                    </div>
                    <div className="card">
                        <img className='card_photo' src={Events_photo3} alt="" />
                        <div className="card_text">
                            <h4>Спортивный <br /> забег</h4>
                            <p className='text_card'>31 июля 2025 года</p>
                        </div>
                        <button className='card_button'>Участвовать</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Events_block