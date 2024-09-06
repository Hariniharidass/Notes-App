import React, { useState } from 'react'
import './textareaContainer.css'

const textareaContainer = () => {

    const [checked, setChecked] = useState(false);
    const [checklistInputValue, setchecklistInputValue] = useState("");
    const [savedNotes, setSavedNotes] = useState('');

    const handleCheckChange = () => {
        setChecked(!checked);
    }
    const saveChecklist = (e) => {
        e.preventDefault();
        console.log({ checklistInputValue });
        setchecklistInputValue("");

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(savedNotes);
    }
    const handleReset = () => {
        setSavedNotes("");
    }
    return (
        <div className='textArea-Container'>
            <div className='checklist-container'>
                <input className='notes-checklist-input' type='text' placeholder='Type your list here :' value={checklistInputValue} onChange={e => setchecklistInputValue(e.target.value)}>
                </input>
                <button className='notes-checklist-add-button' onClick={saveChecklist}>Add</button>

            </div>
            <div className='checklistDisplay'>
                <Checkbox
                    label={checklistInputValue}
                    value={checked}
                    onChange={handleCheckChange}
                />


            </div>
            <form method="post" onSubmit={handleSubmit} onReset={handleReset}>
                <textarea className='notes-textarea'
                    placeholder='Type your notes here : '
                    value={savedNotes} // ...force the input's value to match the state variable...
                    onChange={e => setSavedNotes(e.target.value)} // ... and update the state variable on any edits!
                >


                </textarea>

                <button type="submit" className='notes-checklist-add-button' >Save Notes </button>
                <button type="reset" className='notes-checklist-add-button' >Reset</button>
            </form>
        </div>
    )
}
const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} style={{ marginRight: '.5rem' }} />
            {label}
        </label>
    );
}

export default textareaContainer