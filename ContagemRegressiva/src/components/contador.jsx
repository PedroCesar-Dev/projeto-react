import '../Contador.css'
import React from 'react'

const contador = ({title,number}) => {
  return (
    <div className='counter'>
        <p className='counter-number'>{number}</p>
        <h3 className='counter-text'>{title}</h3>
    </div>
  )
}

export default contador