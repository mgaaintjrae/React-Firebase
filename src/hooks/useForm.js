import { useState, useEffect } from 'react'

export default function useForm(initialState, validate, next) {
    const [values, setValues] =  useState(initialState)
    const [errors, setErrors] =  useState({})
    // Est-ce que je suis en train de soumettre le form de base ? --> je ne suis pas en train de le soumettre de base (false)
    const [isSubmitting, setisSubmitting] =  useState(false)

    useEffect(() => {
        // Si je suis en train de soumetre le form
        if (isSubmitting) {
            // vérification des erreurs possible
            const isErrors = Object.keys(errors).length !== 0
            console.log(isErrors);
            if (isErrors) {
                setisSubmitting(false)
                // Sinon si il n'y a pas d'erreurs
            } else {
                next()
                setisSubmitting(false)
                setValues(initialState)
            }
        }
    }, [errors, next, isSubmitting, initialState])
    
    const handleKeyDown = event => {
        if (event.keyCode === 13 && event.ctrlKey)
        next()
    }
    
    const handleChange = event => {
        event.persist()
        setValues(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        const errors = validate(values)
        setErrors(errors)
        // Déclenche une mise à jour du component
        setisSubmitting(true)
    }

    return {
        handleSubmit,
        handleKeyDown,
        handleChange,
        values
    }
}
