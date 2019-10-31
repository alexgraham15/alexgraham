export default function contactFormInfo(state={
    name: "",
    email: "",
    message: ""
}, action) {
    switch (action.type){
        case "CONTACT_NAME": {
            return {...state, name: action.payload}
        }
        case "CONTACT_EMAIL": {
            return {...state, email: action.payload}
        }
        case "CONTACT_MESSAGE": {
            return {...state, message: action.payload}
        }
        default: {
            return {...state, name: "", email: "", message: ""}
        }
    }
}