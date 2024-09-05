import React from 'react'
import './menu.css'
import AddNotes from './addNotes'
import DisplayNotes from './displayNotes'

const menu = () => {
    return (
        <div className='menu-body'>
            <h1 className='menu-title'>Welcome to My Notes</h1>
            <h3 className='menu-description'>What would you like to do?</h3>
            <div className='button-container'>
                <button className='add-button'>Add a note</button>
                <button className='display-button'>Display a note</button>
                <AddNotes />

            </div>
            <DisplayNotes />
        </div>
    )
}

export default menu
