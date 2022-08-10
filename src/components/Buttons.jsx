import React, { Children } from 'react'
import './componentsCss.css'

function Buttons({type, className,name, children}) {
  return (
    <div>
        <button type={type} className={className}>
            {name}
        </button>

    </div>
  )
}
export default Buttons
