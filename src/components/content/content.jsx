import React from 'react'
import ListLinks from './listLinks/listLinks'
import './content.css'
import {Typography} from '@mui/material'
import {useSelector} from 'react-redux'
const Content = () => {
    const currentGroup = useSelector(({listGroups}) => listGroups.currentGroup)
    return (
        <div className="content">
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {currentGroup}
            </Typography>
            <ListLinks />
        </div>
    )
}

export default Content
