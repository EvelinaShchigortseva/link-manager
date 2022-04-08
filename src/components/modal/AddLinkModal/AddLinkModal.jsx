import * as React from 'react'
import {Button, Dialog, DialogContent} from '@mui/material'
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import './AddLinkModal.css'
import {useDispatch, useSelector} from 'react-redux'
import {addLinkAction} from '../../../store/listLinksReducer'
import {useForm} from './useForm'

const initialValue = {
    id: Date.now(),
    nameLink: '',
    url: '',
    descriptionLink: '',
    currentGroup: '',
}

export default function AddLinkModal({isOpen, handleOpen}) {
    let select

    const {bookmark, setBookmark, validate, error, setError} = useForm(initialValue)

    const dispatch = useDispatch()

    const groups = useSelector((state) => state.listGroups.listGroups)

    const [checked, setChecked] = React.useState(false)

    const handleChange = (event: SelectChangeEvent) => {
        setBookmark({...bookmark, currentGroup: event.target.value})
        console.log(bookmark)
    }

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    if (!checked) {
        select = (
            <FormControl fullWidth margin="normal">
                <InputLabel>Group</InputLabel>
                <Select value={bookmark.currentGroup} onChange={handleChange}>
                    {groups.map((group) => (
                        <MenuItem key={group.id} value={group.group}>
                            {group.group}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    } else {
        select = <div>Список для чтения</div>
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validate()) {
            dispatch(addLinkAction(bookmark))
            handleOpen()
            setBookmark(initialValue)
        }
        if (checked) {
            setBookmark({...bookmark, currentGroup: 'Список для чтения'})
        }
    }

    const closedModal = () => {
        handleOpen()
        setError({})
        setBookmark(initialValue)
    }

    return (
        <div>
            <Dialog sx={{height: '700px'}} open={isOpen} onClose={closedModal}>
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

                        {select}

                        <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleChangeCheckbox} />}
                            label="Список для чтения"
                        />

                        <DialogActions>
                            <Button disabled={false} type="submit" color="inherit" sx={{backgroundColor: '#e6e8e8'}}>
                                Добавить ссылку
                            </Button>
                            <Button color="inherit" sx={{backgroundColor: '#e6e8e8'}} onClick={closedModal}>
                                Закрыть
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
