import React from 'react'
import './EditModal.css'
import {Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button} from '@mui/material'
import {useDispatch} from 'react-redux'
import {allLinks, changeLink, filterLinks} from '../../../store/listLinksReducer'
import {useForm} from '../AddLinkModal/useForm'

function EditModal({link, isOpen, handleOpen}) {
    const INITIAL_STATE = {
        id: link.id,
        nameLink: link.nameLink,
        url: link.url,
        descriptionLink: link.descriptionLink,
        currentGroup: link.currentGroup,
        read: link.read,
    }

    const {bookmark, setBookmark, validate, error, setError, select, checked, groups, box} = useForm(INITIAL_STATE)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            ...bookmark,
            currentGroup: bookmark.read ? 'Список для чтения' : bookmark.currentGroup,
        }

        if (validate()) {
            dispatch(changeLink(payload))
            handleOpen()
            setBookmark(payload)
            if (groups.currentGroup === 'Все закладки' || groups.currentGroup === '') {
                dispatch(allLinks())
            } else if (groups.currentGroup !== payload.currentGroup) {
                dispatch(filterLinks(groups.currentGroup))
            }
        }
    }

    const closedModal = () => {
        handleOpen()
        setError({})
        setBookmark(INITIAL_STATE)
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={closedModal}>
                <DialogTitle>Редактирование</DialogTitle>
                <DialogContent>
                    <form className="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Имя"
                            value={bookmark.nameLink}
                            onChange={(e) => {
                                setBookmark({...bookmark, nameLink: e.target.value})
                            }}
                            {...(error.nameLink && {error: true, helperText: error.nameLink})}
                        />
                        <TextField
                            label="Url"
                            value={bookmark.url}
                            onChange={(e) => {
                                setBookmark({...bookmark, url: e.target.value})
                            }}
                            {...(error.url && {error: true, helperText: error.url})}
                        />
                        <TextField
                            onChange={(e) => {
                                setBookmark({...bookmark, descriptionLink: e.target.value})
                            }}
                            multiline
                            minRows={2}
                            value={bookmark.descriptionLink}
                            {...(error.descriptionLink && {error: true, helperText: error.descriptionLink})}
                        />

                        {select}
                        {box}

                        <DialogActions>
                            <Button color="success" variant="contained" onClick={closedModal}>
                                Закрыть
                            </Button>
                            <Button disabled={false} type="submit" color="secondary" variant="contained">
                                Редактировать
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EditModal
