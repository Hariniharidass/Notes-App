import React, { useState } from 'react'
import './checklist.css'
const checklist = () => {
    const [checked, setChecked] = useState(false);
    const [checklistInputValue, setchecklistInputValue] = useState("");
    const handleCheckChange = () => {
        setChecked(!checked);
    }
    const saveChecklist = (e) => {
        e.preventDefault();
        console.log({ checklistInputValue });
    }
    return (
        <div className='checklist-container'>
            <input className='notes-checklist-input' type='text' placeholder='Type your list here :' value={checklistInputValue} onChange={e => setchecklistInputValue(e.target.value)}></input>
            <button className='notes-checklist-add-button' onClick={saveChecklist}>Add</button>

        </div>
    )
}

export default checklist