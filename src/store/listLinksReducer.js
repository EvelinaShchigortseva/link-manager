const defaultValue = {
    listLinks: [
        { id: 1, nameLink: "Это первое имя ссылки", url: 'Какая-то ссылка', descriptionLink: 'Её описание', currentGroup: '' },
        { id: 2, nameLink: "Лёрнджаваскрипт", url: 'https://learn.javascript.ru/', descriptionLink: `Современный учебник JavaScript
        Перед вами учебник по JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM.`, currentGroup: '' },
        { id: 3, nameLink: "React", url: 'https://reactjs.org/', descriptionLink: 'A JavaScript library for building user interfaces', currentGroup: '' },
    ]

}
const addLink = 'addLink'
const changeLink = 'changeLink'
const deleteLink = 'deleteLink'

export const listLinksReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case addLink:
            return {...state, listLinks: [...state.listLinks, action.payload] }
        case changeLink:
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
        case deleteLink:
            return {...state,
                listLinks: state.listLinks.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}

export const addLinkAction = (payload) => ({ type: addLink, payload })

export const changeLinkAction = (payload) => ({ type: addLink, payload })

export const deleteLinkAction = (payload) => ({ type: deleteLink, payload })


// object = {
//     id: Date.now(),
//     nameLink: '',
//     url: '',
//     descriptionLink: '',
//     currentGroup:'',}