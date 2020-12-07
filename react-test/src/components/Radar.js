import React from 'react'
import ModulesInput from './modulesInput';
import getChartUrl from "../util/getChartUrl"



const Radar = () => {
    
    return (    
        <div className='main-container'>
            <div className='module-container'>
                <ModulesInput />
            </div>
            <div className='image-container'>
            </div>
        </div>
    )
}

export default Radar
