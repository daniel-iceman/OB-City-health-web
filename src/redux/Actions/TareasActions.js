export const addTarea = (tarea) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;
        firestore
            .collection('tareas')
            .add({
                ...tarea,
                authorId: authorId,
                date: new Date(),
            })
            .then(() => {
                dispatch({
                    type: 'ADD_TAREA',
                    tarea,
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'ADD_TAREA_ERR',
                    err,
                });
            });
    };
};

export const removeTarea = (tarea) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('tareas')
            .doc(tarea.id)
            .delete()
            .then(() => {
                dispatch({
                    type: 'REMOVE_TAREA',
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'REMOVE_TAREA_ERR',
                    err,
                });
            });
    };
};

export const toggleChecked = (tarea) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore
            .collection('tareas')
            .doc(tarea.id)
            .set(
                {
                    ...tarea,
                    checked: !tarea.checked
                },
                { merge: true }
            )
            .then(() => {
                dispatch ({
                    type: 'TOGGLE_CHECKED',
                    tarea,
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'TOGGLE_CHECKED_ERR',
                    err,
                });
            });
    };
};