const defaultValue = {
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
    filterLinks: []
}
const filterLinks = 'filterLinks'
const addLink = 'addLink'
const changeLink = 'changeLink'
const deleteLink = 'deleteLink'
const allLinks = 'allLinks'
const findLinks = 'findLinks'

export const listLinksReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case filterLinks:
            return {...state, filterLinks: [...state.listLinks].filter((item) => item.currentGroup.includes(action.payload)) }
        case allLinks:
            return {...state, filterLinks: [...state.listLinks] }
        case findLinks:
            return {...state, filterLinks:[...state.listLinks].filter(link=> (
                link.nameLink.toLowerCase().includes(action.payload.toLowerCase()) || 
                link.url.toLowerCase().includes(action.payload.toLowerCase())))}
        case addLink:
            return {...state, listLinks: [...state.listLinks, action.payload] }
        case changeLink:
            const updatedList = state.listLinks.map((linkItem) => {
                if (action.payload.id === linkItem.id) {
                    return {...action.payload }
                }

                return linkItem
            })
            return {...state, listLinks: updatedList }
        case deleteLink:
            return {
                ...state,
                listLinks: state.listLinks.filter((item) => item.id !== action.payload),
            }
        default:
            return state
    }
}

export const filterLinksAction = (items) => ({
    type: filterLinks,
    payload: items
});

export const findLinksAction = (payload)=> ({
    type: findLinks, payload
})

export const addLinkAction = (payload) => ({ type: addLink, payload })

export const changeLinkAction = (payload) => ({ type: changeLink, payload })

export const deleteLinkAction = (payload) => ({ type: deleteLink, payload })
export const allLinksAction = (payload) => ({ type: allLinks })