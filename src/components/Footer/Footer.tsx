import './style.scss'
import Logo from '../../assets/logo/logo.svg'
import iOS from '../../assets/img/iOS.svg'
import Android from '../../assets/img/Android.svg'
import VK from '../../assets/img/VK.svg'
import TG from '../../assets/img/TG.svg'
import YouTube from '../../assets/img/YouTube.svg'

function Footer() {
  return (
    <section id='footer' className='Footer'>
        <div className="wrap">
        <div className="logo_block">
            <img className='logo' src={Logo} alt="" />
        </div>
        <div className="footer_content">
            <div className="content_up">
                <div className="Footer_text">
                    <a href="">Кто мы</a>
                    <a href="">Что мы делаем</a>
                    <a href="">Помочь фонду</a>
                    <a href="">Мероприятия</a>
                    <a href="">Контакты</a>
                </div>
                <div className="Footer_text">
                    <a href="">Новости фонда</a>
                    <a href="">Мечта</a>
                    <a href="">Наши партнеры</a>
                    <a href="">Наша команда</a>
                </div>
            </div>
            <div className="content_down">
                <div className="services">
                    <img src={iOS} alt="" />
                    <img src={Android} alt="" />
                    <img src={VK} alt="" />
                    <img src={TG} alt="" />
                    <img src={YouTube} alt="" />
                </div>
                <div className="connect">
                    <p><span>Связь с нами:</span> +7 987 160 60 88</p>
                    <p>punkt.miloserdiya@gmail.com</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Footer