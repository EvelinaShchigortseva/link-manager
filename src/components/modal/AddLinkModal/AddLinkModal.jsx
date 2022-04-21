import * as React from 'react'
import {Button, Dialog, DialogContent} from '@mui/material'
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField} from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import './AddLinkModal.css'
import {useDispatch, useSelector} from 'react-redux'
import {addLinkAction, allLinksAction, filterLinksAction} from '../../../store/listLinksReducer'
import {useForm} from './useForm'

const INITIAL_STATE = {
    id: null,
    nameLink: '',
    url: '',
    descriptionLink: '',
    currentGroup: '',
    read: false,
}

export default function AddLinkModal({isOpen, handleOpen}) {
    const {bookmark, setBookmark, validate, error, setError} = useForm(INITIAL_STATE)
    const [checked, setChecked] = React.useState(false)

    const dispatch = useDispatch()

    const groups = useSelector((state) => state.listGroups)

    const handleGroupChange = (event) => {
        setBookmark((prevState) => ({
            ...prevState,
            currentGroup: event.target.value,
        }))
    }

    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked)
        setBookmark({...bookmark, read: event.target.checked})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            ...bookmark,
            currentGroup: checked ? 'Список для чтения' : bookmark.currentGroup,
            id: Date.now(),
        }

        if (validate()) {
            dispatch(addLinkAction(payload))
            handleOpen()
            setBookmark(INITIAL_STATE)
            setChecked(false)
            if (groups.currentGroup === 'Все закладки') {
                dispatch(allLinksAction())
            } else if (groups.currentGroup === payload.currentGroup) {
                dispatch(filterLinksAction(payload.currentGroup))
            }
        }
    }

    const closedModal = () => {
        handleOpen()
        setError({})
        setBookmark(INITIAL_STATE)
        setChecked(false)
    }

    return (
        <div>
            <Dialog sx={{backgoundColor: 'background.paper'}} open={isOpen} onClose={closedModal}>
                <DialogTitle>Добавить ссылку</DialogTitle>
                <DialogContent>
                    <form className="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Название ссылки"
                            onChange={(e) => {
                                setBookmark({...bookmark, nameLink: e.target.value})
                            }}
                            {...(error.nameLink && {error: true, helperText: error.nameLink})}
                        />
                        <TextField
                            label="Url"
                            onChange={(e) => {
                                setBookmark({...bookmark, url: e.target.value})
                            }}
                            {...(error.url && {error: true, helperText: error.url})}
                        />
                        <TextField
                            label="Описание"
                            onChange={(e) => {
                                setBookmark({...bookmark, descriptionLink: e.target.value})
                            }}
                            {...(error.descriptionLink && {error: true, helperText: error.descriptionLink})}
                        />

                        {checked ? (
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
                        )}

                        <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleChangeCheckbox} />}
                            label="Список для чтения"
                        />

                        <DialogActions>
                            <Button disabled={false} type="submit" variant="contained" color="secondary">
                                Добавить ссылку
                            </Button>
                            <Button variant="contained" color="success" onClick={closedModal}>
                                Закрыть
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
