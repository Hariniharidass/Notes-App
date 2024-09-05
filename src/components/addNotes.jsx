import React, { useState } from 'react'

import './checklist.css'
import Checklist from './checklist'
import TextareaContainer from './textareaContainer'
const addNotes = () => {

    return (
        <div >

            <h3 style={{ textAlign: 'left' }}>Do you want to add checklists? 
           </h3>


            <Checklist />
            <TextareaContainer />
        </div >
    )
}

export default addNotes
