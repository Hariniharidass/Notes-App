import React from 'react'
import './textareaContainer.css'

const textareaContainer = () => {
    return (
        <div className='textArea-Container'>
            <textarea className='notes-textarea' placeholder='Type your notes here: '></textarea>
            <button className='notes-checklist-add-button'>Save Notes</button>
        </div>
    )
}

export default textareaContainer