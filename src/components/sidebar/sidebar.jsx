import React, {useState} from 'react'
import {Divider, ListItemButton, ListItemText} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import {useDispatch, useSelector} from 'react-redux'
import {addGroupAction, setGroupAction} from '../../store/listGroupsReducer'
import './sidebar.css'
import {allLinksAction, filterLinksAction} from '../../store/listLinksReducer'

export function Sidebar() {
    const [group, setGroup] = useState('')
    const groups = useSelector((state) => state.listGroups.listGroups)
    const dispatch = useDispatch()

    const addGroup = () => {
        dispatch(addGroupAction(group))
        setGroup('')
    }

    const onShowAllLinks = () => {
        dispatch(allLinksAction())
        dispatch(setGroupAction('Все закладки'))
    }

    const onClickCategory = (item) => {
        dispatch(setGroupAction(item))
        dispatch(filterLinksAction(item))
    }

    return (
        <div className="sidebar">
            <div className="row">
                <TextField
                    id="standard-basic"
                    label="Добавить группу"
                    size="small"
                    variant="standard"
                    onChange={(e) => {
                        setGroup(e.target.value)
                    }}
                    value={group}
                />
                <IconButton aria-label="delete" size="small" onClick={addGroup}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </div>

            {groups.map((group) => (
                <ListItemButton key={group.id} component="a" onClick={() => onClickCategory(group.group)}>
                    <ListItemText primary={group.group} />
                </ListItemButton>
            ))}

            <Divider />
            <ListItemButton onClick={onShowAllLinks}>
                <ListItemText primary="Все закладки" />
            </ListItemButton>
            <Divider />

            <ListItemButton>
                <ListItemText primary="Список для чтения" />
            </ListItemButton>

            <ListItemButton>
                <ListItemText primary="Корзина" />
            </ListItemButton>
        </div>
    )
}
