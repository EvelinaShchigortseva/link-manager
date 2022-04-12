const defaultValue = {
    listGroups: [],
    currentGroup: 'Все закладки',
}

const addGroup = 'addGroup'
const setCurrentGroup = 'setCurrentGroup'


export const getListGroups = (state) => state.listGroups.listGroups

export const listGroupsReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case addGroup:
            return {...state, listGroups: [...state.listGroups, { id: Date.now(), group: action.payload }] }
        case setCurrentGroup:
            return {...state, currentGroup: action.payload }
        default:
            return state
    }
}

export const addGroupAction = (payload) => ({ type: addGroup, payload })
export const setGroupAction = (group) => ({
    type: setCurrentGroup,
    payload: group,
})