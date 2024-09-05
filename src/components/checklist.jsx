import React from 'react'
import './checklist.css'
const checklist = () => {
    return (
        <div className='checklist-container'>
            <input className='notes-checklist-input' type='text' placeholder='Type your list here :'></input>
            <button className='notes-checklist-add-button'>Add</button>
        </div>
    )
}

export default checklist