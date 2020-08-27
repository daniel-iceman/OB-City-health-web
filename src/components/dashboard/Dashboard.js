import React from 'react'
// import AddTareas from '../tareas/AddTareas'
// import Tareas from '../tareas/Tareas'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import DashboardContent from './DashboardContent'

const Dashboard = ({ uid }) => {

    if(!uid) return <Redirect to='/login' />

    return (
        <>
            <DashboardContent />
            {/* <AddTareas />
            <Tareas /> */}
        </>
    )
}


const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default connect(mapStateToProps)(Dashboard)










// ************************ ESTE ES EL METODO DEL VIDEO DE MARIO BROS ************************

// import React, { Component } from 'react'
// import './Dashboard.css'
// import Notifications from './Notifications'
// import ProyectList from '../projects/ProjectList'
// import { connect } from 'react-redux'

// class Dashboard extends Component {
//     render() {
        
//         const { projects } = this.props

//         return (
//             <div className='dashboard-container' >
//                 <div className='dashboard-info' >
//                     <div className='project-info-list'>
//                         <ProyectList 
//                             projects={ projects }
//                         />
//                     </div>
//                     <div className='project-info-notifications'>
//                         <Notifications />
//                     </div>

//                 </div>
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         projects: state.project.projects
//     }
// }

// export default connect(mapStateToProps)(Dashboard)
