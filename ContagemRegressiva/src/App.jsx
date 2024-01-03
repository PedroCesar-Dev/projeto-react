import AppTitulo from './components/AppTitulo'
import Newyear from './assets/background.jpg'
import Contador from './components/contador'
import useCountDown from './hooks/userCountDown'
import './App.css'


function App() {
  const [day, hour, minute, second] = useCountDown ('Jan 1, 2025 00:00:00')
  return (
    
    <div className="App" style ={{backgroundImage:`url(${Newyear})`}}>
      <div className='container'>
       <AppTitulo apptitulo="Contagem Regressiva"/>
      <div className='contagem-regressiva'>
        <Contador title="Dias" number={day}/>
        <Contador title="Horas" number={hour}/>
        <Contador title="Minutos" number={minute}/>
        <Contador title="Segundos" number={second}/>
      </div>
      </div>
    </div>
  )
}
export default App
