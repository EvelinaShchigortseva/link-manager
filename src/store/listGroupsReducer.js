import { createSlice } from "@reduxjs/toolkit";

const listGroups = createSlice({
    name: "listGroups",
    initialState: {
        listGroups: [],
        currentGroup: 'Все закладки',
    },
    reducers: {
        addGroup(state, action) {
            state.listGroups.push(action.payload)
        },
        setCurrentGroup(state, action) {
            state.currentGroup = action.payload
        }

    }
})

export default listGroups.reducer
export const { addGroup, setCurrentGroup } = listGroups.actions