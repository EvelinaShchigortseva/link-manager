import * as React from 'react'
import {Button, Dialog, DialogContent} from '@mui/material'
import {Checkbox, FormControlLabel, TextField} from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import './AddLinkModal.css'
import {useDispatch} from 'react-redux'
import {addLinkAction} from '../../../store/listLinksReducer'

import {useForm} from './useForm'

const INITIAL_STATE = {
    id: null,
    nameLink: '',
    url: '',
    descriptionLink: '',
    currentGroup: '',
}

export default function AddLinkModal({isOpen, handleOpen}) {
    const {bookmark, setBookmark, validate, error, setError, select, checked, setChecked} = useForm(INITIAL_STATE)

    const dispatch = useDispatch()

    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked)
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
        }
    }

    const onHandleOpen = () => {
        handleOpen()
        setError({})
        setBookmark(INITIAL_STATE)
    }

    return (
        <div>
            <Dialog sx={{height: '700px'}} open={isOpen} onClose={onHandleOpen}>
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
                            <Button color="inherit" sx={{backgroundColor: '#e6e8e8'}} onClick={onHandleOpen}>
                                Закрыть
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
