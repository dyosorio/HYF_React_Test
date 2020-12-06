import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const Radar = ({ modules, i, isLoading, hasError, numbers, setNumbers }) => {
    
    return (
        <div className='main-container'>
            <div>
            {modules.map((module) => (
                <div key=uuidv4()>
                <span>{modules[0]}</span>
                <input name="HTML_CSS" type="number" min="0" max="10" value={numbers.HTML_CSS} onChange={(e) => setNumbers(numbers.HTML_CSS)}></input>
                </div>
            ))};
            </div>
        </div>
    )
}

export default Radar
