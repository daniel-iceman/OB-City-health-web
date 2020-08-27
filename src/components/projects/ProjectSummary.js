import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className='project-summary'>
            <div className='project-card-content'>
                <span className='project-card-title'>
                    { project.title }
                </span>
                <p>Posted by Dr. Daniel Díaz</p>
                <p className='project-fecha-hora'>17 Agosto, 1:38pm</p>
            </div>
        </div>     
    )
}

export default ProjectSummary

           
