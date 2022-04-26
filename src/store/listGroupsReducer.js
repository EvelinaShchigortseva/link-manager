// const defaultValue = {
//     listGroups: [],
//     currentGroup: 'Все закладки',
// }

import { createSlice } from "@reduxjs/toolkit";

// const addGroup = 'addGroup'
// const setCurrentGroup = 'setCurrentGroup'

// export const getListGroups = (state) => state.listGroups.listGroups

// export const listGroupsReducer = (state = defaultValue, action) => {
//     switch (action.type) {
//         case addGroup:
//             return {...state, listGroups: [...state.listGroups, {id: Date.now(), group: action.payload}]}
//         case setCurrentGroup:
//             return {...state, currentGroup: action.payload}
//         default:
//             return state
//     }
// }

// export const addGroupAction = (payload) => ({type: addGroup, payload})
// export const setGroupAction = (group) => ({
//     type: setCurrentGroup,
//     payload: group,
// })


const listGroups = createSlice ({
    name: "listGroups",
    initialState: {
        listGroups: [],
        currentGroup: 'Все закладки',
    },
    reducers:{
        addGroup(state, action) {
            state.listGroups.push(action.payload)
        },
        setCurrentGroup(state, action){
            state.currentGroup = action.payload
        }
    
    }
})

export default listGroups.reducer
export const {addGroup, setCurrentGroup} = listGroups.actions