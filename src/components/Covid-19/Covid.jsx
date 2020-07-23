import React, { useState, useEffect } from 'react'
import CovidDesign from './CovidDesign'
import './Covid.css'

function Covid() {
    
    useEffect(() => {
        window.scroll(0,0)
      });
    
    return (
        <div>
            <CovidDesign />
        </div>
    )
}

export default Covid
