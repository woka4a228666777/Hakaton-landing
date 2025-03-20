import './app.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Team from './components/Team/Team'
import Partners from './components/Partners/Partners'
import Project_block from './components/Project_block/Project_block'
import Help_donation from './components/Help_donation/Help_donation'
import Fond_news from './components/Fond_news/Fond_news'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Team/>
        <Partners/>
        <Project_block/>
        <Help_donation/>
        <Fond_news/>
      </main>
    </>
  )
}

export default App
