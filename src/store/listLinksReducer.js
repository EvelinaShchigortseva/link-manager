const defaultValue = {
    listLinks: []


}
const addLink = 'addLink'

export const listLinksReducer = (state = defaultValue, action) => {
    switch (action.type){
        case addLink:
            return {...state, listLinks: [...state.listLinks, action.payload]}
        default:
            return state
    }
}

export const addLinkAction = (payload) => (
    {type: addLink, payload})