const defaultValue = {
    listGroups: []
}

const addGroup = 'addGroup'

export const listGroupsReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case addGroup:
            return {...state, listGroups: [...state.listGroups, { id: Date.now(), name: action.payload, }] }
        default:
            return state
    }

}


export const addGroupAction = (payload) => ({ type: addGroup, payload })