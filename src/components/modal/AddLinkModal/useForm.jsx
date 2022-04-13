import React from 'react'
import {useSelector} from 'react-redux'
import {FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel} from '@mui/material'

export function useForm(initialValue) {
    const [bookmark, setBookmark] = React.useState(initialValue)
    const [error, setError] = React.useState({})
    const [checked, setChecked] = React.useState(false)

    const groups = useSelector((state) => state.listGroups)

    const handleGroupChange = (event) => {
        setBookmark((prevState) => ({
            ...prevState,
            currentGroup: event.target.value,
        }))
    }

    const handleChangeCheckbox = (event) => {
        setChecked((prevState) => !prevState)
    }

    const select = checked ? (
        <div>Список для чтения</div>
    ) : (
        <FormControl fullWidth margin="normal">
            <InputLabel>Group</InputLabel>
            <Select value={bookmark.currentGroup} onChange={handleGroupChange}>
                {groups.listGroups.map((group) => (
                    <MenuItem key={group.id} value={group.group}>
                        {group.group}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )

    const box = (
        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChangeCheckbox} />} label="Список для чтения" />
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
        groups,
        box,
    }
}
