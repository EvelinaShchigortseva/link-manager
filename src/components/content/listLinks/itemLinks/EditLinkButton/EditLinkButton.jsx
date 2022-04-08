import React from 'react'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import EditModal from '../../../../modal/EditModal/EditModal'

function EditLinkButton({link}) {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleOpenModal = () => setIsOpen((prevState) => !prevState)

    return (
        <div>
            <IconButton type="submit" sx={{p: '8px'}} aria-label="search" onClick={handleOpenModal}>
                <EditIcon color="primary" />
            </IconButton>
            <EditModal link={link} isOpen={isOpen} handleOpenModal={handleOpenModal} />
        </div>
    )
}

export default EditLinkButton
