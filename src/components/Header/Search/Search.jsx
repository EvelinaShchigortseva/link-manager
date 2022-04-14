import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { findLinksAction } from '../../../store/listLinksReducer'

export default function Search() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()


    const handleSubmit =  (e) => {
        e.preventDefault()
        dispatch(findLinksAction(value))
    }
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 800,
                height: 36,
            }}
            onSubmit = {handleSubmit}
        >
            <InputBase sx={{width: 50, ml: 1, flex: 1}} placeholder="Поиск" onChange={(e)=>setValue(e.target.value)} />
            <IconButton type="submit" sx={{p: '8px'}} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
