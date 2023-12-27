import AppTitulo from './components/AppTitulo'
import Newyear from './assets/background.jpg'
import Contador from './components/contador'
import './App.css'

function App() {
  return (
    <div className="App" style ={{backgroundImage:`url(${Newyear})`}}>
      <div className='container'>
       <AppTitulo apptitulo="Contagem Regressiva"/>
      <div className='contagem-regressiva'>
        <Contador title="Dias" number={2}/>
        <Contador title="Horas" number={2}/>
        <Contador title="Minutos" number={2}/>
        <Contador title="Segundos" number={2}/>
      </div>
      </div>
    </div>
  )
}
export default App
