export default function menuLayout(state={
    menuOpen: false,
    menuVisable: "container-full"
}, action) {
    switch (action.type){
        case "MENU_OPEN": {
            return {...state, menuOpen: action.payload, menuVisable: "container-full"}
        }
        case "MENU_CLOSE": {
            return {...state, menuOpen: action.payload, menuVisable: "container-reduced"}
        }
    }
    return state
}