import React from 'react'
import './AddLinkButton.css'
import AddLinkModal from '../../modal/AddLinkModal/AddLinkModal'
import {Button, Stack} from '@mui/material'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'

function AddLinkButton() {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleOpen = () => setIsOpen((prevState) => !prevState)

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<StarOutlinedIcon />} onClick={handleOpen}>
                    Добавить ссылку
                </Button>
            </Stack>
            <AddLinkModal handleOpen={handleOpen} isOpen={isOpen} />
        </div>
    )
}

export default AddLinkButton
