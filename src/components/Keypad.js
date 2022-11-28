// Code Keypad Component Here
import React from 'react';

function Keypad (){
    return (
        <div>
            <input
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="Enter password..."
            />
        </div>
    )
}

function handleChange() {
    console.log('Entering password...')
}

export default Keypad;