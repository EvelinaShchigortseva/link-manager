import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {Button, Stack} from '@mui/material'

function LogIn() {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button color="secondary" variant="contained" sx={{width: 'auto'}} startIcon={<AccountCircleIcon />}>
                    Логин
                </Button>
            </Stack>
        </div>
    )
}

export default LogIn
