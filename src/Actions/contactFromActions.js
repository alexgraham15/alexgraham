export function updateName(name){
    return {
        type: "CONTACT_NAME",
        payload: name
    }
}
export function updateEmail(email){
    return {
        type: "CONTACT_NAME",
        payload: email
    }
}
export function updateMessage(message){
    return {
        type: "CONTACT_MESSAGE",
        payload: message
    }
}