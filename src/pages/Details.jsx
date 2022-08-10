import React from 'react'
import Buttons from '../components/Buttons'
import {FcTodoList} from 'react-icons/fc'
import './style.css'

function  Details() {
  return (
    <main>
      <div className='todoList-container'>
        <h2>Todo List</h2>
        <div className='list-container'>
          <h3 className='list-title'>1</h3>
          <p className='list-hour'>9:00</p>
        </div>
        <div className='sub-list-container'>
            <span></span>
            <span className='sublist-body'>meeting</span>
            <span className='sublist-date'>20/08/2022</span>
          </div>
      </div>
      <div className='todoList-container'>
        <div className='list-container'>
          <h3 className='list-title'>2</h3>
          <p className='list-hour'>10:00</p>
        </div>
        <div className='sub-list-container'>
            <span></span>
            <span className='sublist-body'>meeting</span>
            <span className='sublist-date'>20/08/2022</span>
          </div>
      </div>
    </main>
  )
}
export default Details