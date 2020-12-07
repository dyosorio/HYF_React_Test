import React, { useContext } from 'react'
import { appContext } from "./Context"; 
import ModulesInput from './modulesInput';
import { getBarChartUrl } from "../util/getChartUrl"

const Bar = () => {
    const { arrayOfNumbers } = useContext(appContext)
    const url = getBarChartUrl(arrayOfNumbers)
    console.log(url)
    
    return (
        <div className='main-container'>
            <div className='module-container'>
                <ModulesInput />
            </div>
            <div className='image-container'>
                <img src={url} alt="Bar_Chart" />
            </div>
        </div>
    )
}

export default Bar
