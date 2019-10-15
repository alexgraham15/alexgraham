export function openMenu(){
    return {
        type: "MENU_OPEN",
        payload: true
    }
}
export function closeMenu(){
    return {
        type: "MENU_CLOSE",
        payload: false
    }
}