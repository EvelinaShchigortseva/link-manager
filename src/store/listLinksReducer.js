const defaultValue = {
    listLinks: []

}
const addLink = 'addLink'
const changeLink = 'changeLink'
const deleteLink = 'deleteLink'

export const listLinksReducer = (state = defaultValue, action) => {
    switch (action.type){
        case addLink:
            return {...state, listLinks: [...state.listLinks, action.payload]}
        case changeLink:
            const updatedList = state.listLinks.map(linkItem => {
                if (action.payload.id === linkItem.id) {
                    return {...action.payload}
                }

                return linkItem;
            })
            
            return {...state, listLinks: updatedList}
            // const linkList = [...state.listLinks ]
            // const link = linkList.find(link => {
            //     if(link.id === action.payload.id) {
            //         link.nameLink = action.payload.nameLink;
            //         link.url = action.payload.url;
            //         link.descriptionLink = action.payload.descriptionLink;
            //         link.currentGroup = action.payload.currentGroup;
            //         return true;
            //     }
            // })
            // return {...state, listLinks: [...state.listLinks ]}
        default:
            return state
    }
}

export const addLinkAction = (payload) => (
    {type: addLink, payload})


export const changeLinkAction = (payload) => (
    {type: changeLink, payload})


// object = {
//     id: Date.now(),
//     nameLink: '',
//     url: '',
//     descriptionLink: '',
//     currentGroup:'',}