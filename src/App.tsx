import './App.css'
import { Header } from './components/header/Header'
import Profesionales from './components/profesiones/Profesionales'


function App() {

  return (
  <main className='max-w-[1440px] w-full mx-auto flex flex-col items-center gap-28'>
   

    <Header/>
    <Profesionales/>

  </main>
  )
}

export default App
