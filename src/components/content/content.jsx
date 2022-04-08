import React from 'react'
import ListLinks from './listLinks/listLinks'
import './content.css'
import {Typography} from '@mui/material'
const Content = () => {
    return (
        <div className="content">
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                Название группы
            </Typography>
            <ListLinks />
        </div>
    )
}

export default Content
