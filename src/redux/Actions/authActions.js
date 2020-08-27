export const signIn = creds => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({ type: 'SIGN_IN' });
            })
            .catch(err => {
                dispatch({ type: 'SIGN_IN_ERR' }, err);
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: 'SIGN_OUT'});
            });
    };
};

export const signUp = creds => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({ type: 'SIGN_UP' });
            })
            .catch(err => {
                dispatch({ type: 'SIGN_UP_ERR' });
            });
    };
};


// export const signUp = (newUser) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         const firebase = getFirebase();
//         const firestore = getFirestore();

//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(newUser.email, newUser.password)
//             .then((resp) => {
//                 return firestore.collection('users').doc(resp.user.uid).set({
//                     firstName: newUser.firstName,
//                     lastNameF: newUser.lastNameF,
//                     lastNameM: newUser.lastNameM,
//                     initials: newUser.firstName[0] + newUser.lastNameF[0]
//                 })
//             })
//             .then(() => {
//                 dispatch({ type: 'SIGN_UP' });
//             })
//             .catch(err => {
//                 dispatch({ type: 'SIGN_UP_ERR' }, err);
//             });
//     };
// };




