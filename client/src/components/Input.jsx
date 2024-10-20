import React from 'react'

export default function Input({placeholder, handleInput, name}) {

  return (
    <div>
        <input 
            name={name}
            className='input-field' 
            type="text" 
            placeholder={placeholder}
            onChange={handleInput} />
    </div>
  )
}
