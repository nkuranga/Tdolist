import React, {useState} from 'react'
import {ReactDialogBox} from "react-js-dialog-box"
import 'react-js-dialog-box/dist/index.css'

function Dialog({closeModel,isOpen}) {
   
  return (
    <>
    {isOpen && (
        <ReactDialogBox 
        closeBox={closeModel}
        modalWidth='30%'
        headerBackgroundColor='#1abc9c'
        headerTextColor='white'
        headerHeight='20'
        closeButtonColor='white'
        bodyBackgroundColor='white'
        bodyTextColor='black'
        bodyHeight='200px'
        headerText='Title'
    >
        <h1>Hello Dialog</h1>
    </ReactDialogBox>
    ) }
        
    </>
  )
}

export default Dialog