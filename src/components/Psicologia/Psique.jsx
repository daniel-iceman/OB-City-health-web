import React, { useEffect } from 'react'
import PsiqueDesign from './PsiqueDesign'
import './Psique.css'

function Psique() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <PsiqueDesign />
            
        </div>
    )
}

export default Psique
