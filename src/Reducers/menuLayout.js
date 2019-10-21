export default function menuLayout(state={
    menuOpen: false
}, action) {
    switch (action.type){
        case "MENU_OPEN": {
            return {...state, menuOpen: action.payload}
        }
        case "MENU_CLOSE": {
            return {...state, menuOpen: action.payload}
        }
    }
    return state
}