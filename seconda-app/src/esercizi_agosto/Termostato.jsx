import React from 'react'
import { useState } from 'react'

const Termostato = () => {
    const [temperatura, setTemperatura] = useState(20);

  return (
    <div>
        <div>{temperatura}</div>
    <div>
      <button onClick={() => setTemperatura(temperatura - 1)} className='btn btn-success'>-</button>&nbsp;
      <button onClick={() => setTemperatura(temperatura + 1)} className='btn btn-success'>+</button>
    </div>
    </div>
  )
}

export default Termostato