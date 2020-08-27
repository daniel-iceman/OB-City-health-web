import React from 'react'
import './ProjectDetails.css'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className='container-project-details'>
            <div className='card-project-details'>

                <div className='card-content-proyect-details' >
    <span className='project-card-title'> Project Title - {id} </span>
                    <p>lorem ipsum quasi voluptates libero adipsici a voluptas nescieunt fuga consectetur aperiam, semper fidelis, indivisa manent </p>
                    <div className='project-card-action'>
                        <div> Posted by Dr. Daniel Díaz</div>
                        <div> 17 Agosto, 1:38pm</div>
                    </div>
                </div>

            </div>            
        </div>
    )
}

export default ProjectDetails
