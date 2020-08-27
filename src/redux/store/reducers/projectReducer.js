
// const initState = {
//     projects: [
//         {
//             id: '1',
//             title: 'Reduce carbohidratos',
//             content:'Esto ayudará a que pierdas mas facilmente grasa corporal'
//         },
//         {
//             id: '2',
//             title: 'Haz ejercicio',
//             content:'Esto ayudará aumentando tu metabolismo basal'
//         },
//         {
//             id: '3',
//             title: 'Duerme bien',
//             content:'Dormir adecuadamente tendrá un impacto positivo en tu desempeño y la perdida de grasa corporal'
//         }
//     ]
// }

// const projectReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'CREATE_PROJECT':
//             console.log('created project', action.project);
//             return state;
//         case 'CREATE_PROJECT_ERROR':
//             console.log('create project error', action.err);
//             return state;
//         default:
//             return state;
//     }
// }

// export default projectReducer