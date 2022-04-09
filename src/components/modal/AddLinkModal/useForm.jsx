import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import {getListGroups} from '../../../store/listGroupsReducer'
import {useSelector} from 'react-redux'

export function useForm(initialValue) {
    const [bookmark, setBookmark] = React.useState(initialValue)
    const [error, setError] = React.useState({})
    const [checked, setChecked] = React.useState(false)
    const groups = useSelector(getListGroups)

    const handleGroupChange = (event) => {
        setBookmark((prevState) => ({
            ...prevState,
            currentGroup: event.target.value,
        }))
    }

    let select = !checked ? (
        <FormControl fullWidth margin="normal">
            <InputLabel>Group</InputLabel>
            <Select value={bookmark.currentGroup} onChange={handleGroupChange}>
                {groups.map((group) => (
                    <MenuItem key={group.id} value={group.group}>
                        {group.group}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    ) : (
        <div>Список для чтения</div>
    )

    const validate = () => {
        let temp = []
        temp.nameLink = bookmark.nameLink ? '' : 'Это поле обязательно к заполнению'
        temp.url =
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=,\w]+@)[A-Za-z0-9.-]+)((?:\/[~%.\w-_]*)?\??(?:[-=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                bookmark.url,
            )
                ? ''
                : 'Url-адрес недействителен'
        temp.descriptionLink = bookmark.descriptionLink ? '' : `Поле 'описание' обязательно для заполнения`
        setError({...temp})
        return Object.values(temp).every((x) => x === '')
    }

    return {
        bookmark,
        setBookmark,
        validate,
        error,
        setError,
        select,
        checked,
        setChecked,
    }
}
