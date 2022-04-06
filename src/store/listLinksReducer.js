// const defaultValue = {
//     listLinks: []

// }


// const addLink = 'addLink'
// const changeLink = 'changeLink'
// const deleteLink = 'deleteLink'

const ADD_LINK = 'ADD-LINK'
const UPDATE_SET_LINK = 'UPDATE-SET-LINK'
const UPDATE_SET_URL = 'UPDATE-SET-URL'
const UPDATE_SET_DESCRIPTION = 'UPDATE-SET-DESCRIPTION'


const defaultValue = {
    links: [
        { id: 1, nameLink: "Это первое имя ссылки", url: 'Какая-то ссылка', description: 'Её описание', currentGroup: '' },
        { id: 2, nameLink: "Лёрнджаваскрипт", url: 'https://learn.javascript.ru/', description: `Современный учебник JavaScript
        Перед вами учебник по JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM.`, currentGroup: '' },
        { id: 3, nameLink: "React", url: 'https://reactjs.org/', description: 'A JavaScript library for building user interfaces', currentGroup: '' },
    ],
    nameLink: '',
    url: '',
    description: '',
    currentGroup: '',
}


export const listLinksReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case ADD_LINK:
            return {...state,
                nameLink: '',
                url: '',
                description: '',
                currentGroup: '',
                links: [...state.links, {
                    id: Date.now(),
                    nameLink: state.nameLink,
                    url: state.url,
                    description: state.description,
                    currentGroup: state.currentGroup,
                }]
            }
        case UPDATE_SET_LINK:
            return {...state, nameLink: action.newLink }
        case UPDATE_SET_URL:
            return {...state, url: action.newUrl }
        case UPDATE_SET_DESCRIPTION:
            return {...state, description: action.newDescription }
            // case changeLink:
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


export const addLinkActionCreator = () => ({ type: ADD_LINK })
export const updateLinkActionCreator = (link) => ({
    type: UPDATE_SET_LINK,
    newLink: link,
})
export const updateUrlActionCreator = (url) => ({
    type: UPDATE_SET_URL,
    newUrl: url,
})
export const updateDescriptionActionCreator = (description) => ({
    type: UPDATE_SET_DESCRIPTION,
    newDescription: description,
})


// export const addLinkAction = (payload) => (
//     {type: addLink, payload})


// export const changeLinkAction = (payload) => (
//     {type: addLink, payload})


// object = {
//     id: Date.now(),
//     nameLink: '',
//     url: '',
//     descriptionLink: '',
//     currentGroup:'',}