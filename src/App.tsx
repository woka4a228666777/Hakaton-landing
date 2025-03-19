import './app.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Team from './components/Team/Team'
import Partners from './components/Partners/Partners'
import Project_block from './components/Project_block/Project_block'

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
      </main>
    </>
  )
}

export default App
