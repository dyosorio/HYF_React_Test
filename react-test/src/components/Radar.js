import React, { useContext } from 'react'
import { appContext } from "./Context"; 
import ModulesInput from './modulesInput';
import { getRadarChartUrl } from "../util/getChartUrl"

const Radar = () => {
    const { arrayOfNumbers } = useContext(appContext)
    const url = getRadarChartUrl(arrayOfNumbers)
    console.log(url)
    
    return (    
        <div className='main-container'>
            <div className='module-container'>
                <ModulesInput />
            </div>
            <div className='image-container'>
                <img src={url} alt="Radar_Chart" />
            </div>
        </div>
    )
}

export default Radar
