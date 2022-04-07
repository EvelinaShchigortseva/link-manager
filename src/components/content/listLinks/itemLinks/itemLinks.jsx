import React from 'react'
import {Card, CardActions, CardContent, Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import './itemLinks.css'
import {deleteLinkAction} from '../../../../store/listLinksReducer'
import {useDispatch} from 'react-redux'
import EditLinkButton from './EditLinkButton/EditLinkButton'

const ItemLinks = ({id, nameLink, link, description}) => {
    const dispatch = useDispatch()
    const onRemoveLink = (id) => {
        dispatch(deleteLinkAction(id))
    }

    return (
        <div>
            <Card sx={{minWidth: 275, marginBottom: '10px', backgroundColor: '#e6e8e8'}}>
                <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom value={nameLink}>
                            {nameLink}
                        </Typography>

                        <Typography variant="body2">{link}</Typography>

                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {description}
                        </Typography>
                    </div>

                    <CardActions sx={{p: 0, alignItems: 'flex-start'}}>
                        <EditLinkButton id={id} />
                        <IconButton type="submit" sx={{p: '8px'}} onClick={() => onRemoveLink(id)}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default ItemLinks
