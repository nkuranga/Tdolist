import React from 'react'
import { useState } from 'react'
import {Link, Outlet} from "react-router-dom"
import Dialog from '../components/Dialog'
const Menu =()=>{
  const [isOpen, setIsOpen] = useState(false)

    const openModel=()=>{
        setIsOpen(true)
    }
    const closeModel=()=>{
        setIsOpen(false)
    }
    console.log(isOpen)
  return (
    <div className='wrapper'>
        <nav>
            <a><Link to="/">Home</Link></a>
            <a><Link to= "/list">Todo List</Link></a>
            <a><Link to="/weather">Weather</Link></a>
            <a onClick={openModel}>Add Todo</a>
            <div className="animation start-home"></div>

        </nav>
        <Outlet/>
    <Dialog 
      isOpen={isOpen}
      closeModel={closeModel}
      openModel= {openModel}

    />
    </div>
  )
}

export default Menu