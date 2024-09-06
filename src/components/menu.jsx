import React, { useState } from 'react'
import './menu.css'
import AddNotes from './addNotes'
import DisplayNotes from './displayNotes'

const menu = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const onClickAdd = () => setShowAdd(toggle => !toggle)
    const onClickShow = () => setShowNotes(toggle => !toggle)

    return (
        <div className='menu-body'>
            <h1 className='menu-title'>Welcome to My Notes</h1>
            <h3 className='menu-description'>What would you like to do?</h3>
            <div className='button-container'>
                <button className='add-button' onClick={onClickAdd}>Add a note</button>
                <br />
                <button className='display-button' onClick={onClickShow}>Display a note</button>
            </div>
            {showAdd ? <AddNotes /> : null}
            {showNotes ? <DisplayNotes /> : null}
        </div >
    )
}

export default menu
