import React, {useState} from 'react'
import {Divider, ListItemButton, ListItemText} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import {useDispatch, useSelector} from 'react-redux'
import {addGroup, setCurrentGroup} from '../../store/listGroupsReducer'
import './sidebar.css'
import {allLinks, filterLinks, remoteLinks} from '../../store/listLinksReducer'

export function Sidebar() {
    const [groupLink, setGroupLink] = useState('')
    const groups = useSelector((state) => state.listGroups.listGroups)
    const dispatch = useDispatch()

    const addGroupLink = () => {
        if (groupLink) {
            const group = {
                id: Date.now(),
                group: groupLink,
            }
            dispatch(addGroup(group))
            setGroupLink('')
        }
    }

    const onShowAllLinks = () => {
        dispatch(setCurrentGroup('Все закладки'))
        dispatch(allLinks())
    }

    const onClickCategory = (item) => {
        dispatch(setCurrentGroup(item))
        dispatch(filterLinks(item))
    }

    const onShowRemoteLinks = () => {
        dispatch(setCurrentGroup('Корзина'))
        dispatch(remoteLinks())
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
                        setGroupLink(e.target.value)
                    }}
                    value={groupLink}
                />
                <IconButton aria-label="delete" size="small" onClick={addGroupLink}>
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
