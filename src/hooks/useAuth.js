import {useState, useEffect} from 'react'
import firebase from '../firebase';

export default function useAuth() {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        // changement de l'état de l'authentification (fonction Firebase)
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        // fait disparaitre l'object une fois déconnecté 
        return () => unsubscribe()
    }, [])

    return authUser
}

