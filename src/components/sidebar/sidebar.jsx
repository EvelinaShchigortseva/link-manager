import React, {useState} from 'react'
import {Divider, ListItemButton, ListItemText} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import {useDispatch, useSelector} from 'react-redux'
import {addGroupAction, setGroupAction} from '../../store/listGroupsReducer'
import './sidebar.css'
import {allLinksAction, filterLinksAction, remoteLinksAction} from '../../store/listLinksReducer'

export function Sidebar() {
    const [group, setGroup] = useState('')
    const groups = useSelector((state) => state.listGroups.listGroups)
    const dispatch = useDispatch()

    const addGroup = () => {
        if (group) {
            dispatch(addGroupAction(group))
            setGroup('')
        }
    }

    const onShowAllLinks = () => {
        dispatch(setGroupAction('Все закладки'))
        dispatch(allLinksAction())
    }

    const onClickCategory = (item) => {
        dispatch(setGroupAction(item))
        dispatch(filterLinksAction(item))
    }

    const onShowRemoteLinks = () => {
        dispatch(setGroupAction('Корзина'))
        dispatch(remoteLinksAction())
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
                <ListItemButton key={group.id} onClick={() => onClickCategory(group.group)}>
                    <ListItemText primary={group.group} />
                </ListItemButton>
            ))}

            <Divider />
            <ListItemButton onClick={() => onShowAllLinks('Все закладки')}>
                <ListItemText primary="Все закладки" />
            </ListItemButton>
            <Divider />

            <ListItemButton onClick={() => onClickCategory('Список для чтения')}>
                <ListItemText primary="Список для чтения" />
            </ListItemButton>

            <ListItemButton onClick={onShowRemoteLinks}>
                <ListItemText primary="Корзина" />
            </ListItemButton>
        </div>
    )
}
