import { createSlice } from "@reduxjs/toolkit";

// const defaultValue = {
//     listLinks: [{
//             id: 1,
//             nameLink: 'Это первое имя ссылки',
//             url: 'Какая-то ссылка',
//             descriptionLink: 'Её описание',
//             currentGroup: '',
//         },
//         {
//             id: 2,
//             nameLink: 'Лёрнджаваскрипт',
//             url: 'https://learn.javascript.ru/',
//             descriptionLink: `Современный учебник JavaScript
//         Перед вами учебник по JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM.`,
//             currentGroup: '',
//         },
//         {
//             id: 3,
//             nameLink: 'React',
//             url: 'https://reactjs.org/',
//             descriptionLink: 'A JavaScript library for building user interfaces',
//             currentGroup: '',
//         },
//     ],
//     filterLinks: [],
//     remoteLinks: [],
// }
// const filterLinks = 'filterLinks'
// const addLink = 'addLink'
// const changeLink = 'changeLink'
// const deleteLink = 'deleteLink'
// const allLinks = 'allLinks'
// const findLinks = 'findLinks'
// const saveRemoteLinks = 'saveRemoteLinks'
// const remoteLinks = 'remoteLinks'
// const deletePermanentlyLink = 'deletePermanentlyLink'

// export const listLinksReducer = (state = defaultValue, action) => {
//     switch (action.type) {
//         case filterLinks:
//             return {...state, filterLinks: state.listLinks.filter((item) => item.currentGroup.includes(action.payload)) }
//         case allLinks:
//             return {...state, filterLinks: [...state.listLinks] }
//         case findLinks:
//             return {
//                 ...state,
//                 filterLinks: [...state.listLinks].filter(
//                     (link) =>
//                     link.nameLink.toLowerCase().includes(action.payload.toLowerCase()) ||
//                     link.url.toLowerCase().includes(action.payload.toLowerCase()),
//                 ),
//             }
//         case addLink:
//             return {...state, listLinks: [...state.listLinks, action.payload] }
//         case changeLink:
//             const updatedList = state.listLinks.map((linkItem) => {
//                 if (action.payload.id === linkItem.id) {
//                     return {...action.payload }
//                 }

//                 return linkItem
//             })
//             return {...state, listLinks: updatedList }
//         case deleteLink:
//             return {
//                 ...state,
//                 listLinks: state.listLinks.filter((item) => item.id !== action.payload),
//             }
//         case saveRemoteLinks:
//             return {...state, remoteLinks: [...state.remoteLinks, action.payload] }
//         case remoteLinks:
//             return {...state, filterLinks: [...state.remoteLinks] }
//         case deletePermanentlyLink:
//             return {
//                 ...state,
//                 filterLinks: state.filterLinks.filter((item) => item.id !== action.payload),
//                 remoteLinks: state.remoteLinks.filter((item) => item.id !== action.payload),
//             }
//         default:
//             return state
//     }
// }

// export const filterLinksAction = (items) => ({
//     type: filterLinks,
//     payload: items,
// })

// export const findLinksAction = (payload) => ({
//     type: findLinks,
//     payload,
// })

// export const addLinkAction = (payload) => ({ type: addLink, payload })

// export const changeLinkAction = (payload) => ({ type: changeLink, payload })

// export const deleteLinkAction = (payload) => ({ type: deleteLink, payload })
// export const saveRemoteLinksAction = (payload) => ({ type: saveRemoteLinks, payload })
// export const remoteLinksAction = () => ({ type: remoteLinks })
// export const allLinksAction = () => ({ type: allLinks })
// export const deletePermanentlyLinkAction = (payload) => ({ type: deletePermanentlyLink, payload })

const listLinks = createSlice({
    name: "listLinks",
    initialState: {
        listLinks: [{
                id: 1,
                nameLink: 'Это первое имя ссылки',
                url: 'Какая-то ссылка',
                descriptionLink: 'Её описание',
                currentGroup: '',
            },
            {
                id: 2,
                nameLink: 'Лёрнджаваскрипт',
                url: 'https://learn.javascript.ru/',
                descriptionLink: `Современный учебник JavaScript
        Перед вами учебник по JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM.`,
                currentGroup: '',
            },
            {
                id: 3,
                nameLink: 'React',
                url: 'https://reactjs.org/',
                descriptionLink: 'A JavaScript library for building user interfaces',
                currentGroup: '',
            },
        ],
        filterLinks: [],
        remoteLinks: [],
    },
    reducers: {
        addLink(state, action) {
            state.listLinks.push(action.payload)
        },
        filterLinks(state, action) {
            state.filterLinks = state.listLinks.filter((item) => item.currentGroup.includes(action.payload))
        },
        changeLink(state, action) {
            const updatedList = state.listLinks.map((linkItem) => {
                if (action.payload.id === linkItem.id) {
                    return action.payload
                }
                return linkItem
            })
            state.listLinks = updatedList
        },
        deleteLink(state, action) {
            state.listLinks = state.listLinks.filter((item) => item.id !== action.payload)
        },
        allLinks(state) {
            state.filterLinks = state.listLinks
        },
        findLinks(state, action) {
            state.filterLinks = state.listLinks.filter(
                (link) =>
                link.nameLink.toLowerCase().includes(action.payload.toLowerCase()) ||
                link.url.toLowerCase().includes(action.payload.toLowerCase())
            )
        },
        saveRemoteLinks(state, action) {
            state.remoteLinks.push(action.payload)
        },
        remoteLinks(state) {
            state.filterLinks = state.remoteLinks
        },
        deletePermanentlyLink(state, action) {
            state.filterLinks = state.filterLinks.filter((item) => item.id !== action.payload);
            state.remoteLinks = state.remoteLinks.filter((item) => item.id !== action.payload)
        }
    }
})


export default listLinks.reducer
export const {
    filterLinks,
    addLink,
    changeLink,
    deleteLink,
    allLinks,
    findLinks,
    saveRemoteLinks,
    remoteLinks,
    deletePermanentlyLink
} = listLinks.actions