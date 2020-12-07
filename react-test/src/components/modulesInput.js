import React, { useContext } from 'react'
import { appContext } from "./Context"; 
import modules from "../modules"
import { v4 as uuidv4 } from 'uuid';

const ModulesInput = () => {

    const { arrayOfNumbers, setArrayOFNumbers } = useContext(appContext)
    
    const listModules = arrayOfNumbers.map((item, index) =>
        <div className="form-container" key={uuidv4()}>
            <div>
                <span>{modules[index]}</span>
            </div>
            <div>
                <input 
                type="number" 
                min="1" 
                max="10" 
                value={item} 
                onChange={(e) => {
                    let updatedArrayOfNumbers = [...arrayOfNumbers];
                    updatedArrayOfNumbers[index] = parseInt(e.target.value);
                    setArrayOFNumbers(updatedArrayOfNumbers);
                }}></input>
            </div>
        </div>
    ); 
    
    return (
        <div>{listModules}</div>
    )
}

export default ModulesInput
