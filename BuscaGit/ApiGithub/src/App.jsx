import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")
  function handlebuscar() {
    axios.get(`https://api.github.com/users/${usuario}/`).then(response => console.log(response.data))
  }
  return (
    <>
    <label class="title">Git search</label>
     <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
     <button onClick={handlebuscar}>Pesquisar</button>
    </>
  )
}

export default App
