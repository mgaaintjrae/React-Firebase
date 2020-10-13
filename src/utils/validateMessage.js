const validateMessage = values => {
    const errors = {}

    // si le message n'exite pas
    if (!values.message) {
        errors.message = 'Le message est requis.'
        // et si la longueur du message dépasse 280
    } else if (values.message.length > 280) {
        errors.message = 'Le message ne doit pas excéder 280 caractères.'
    }

    //pour les mails par exemple :
    // if (values.email) {
    //     errors.email = 'L\'email est requis'
    // }

    return errors
}

export default validateMessage