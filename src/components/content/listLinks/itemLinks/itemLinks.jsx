import React from 'react'
import {Card, CardActions, CardContent, Typography, Link} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import './itemLinks.css'
import {
    allLinksAction,
    deleteLinkAction,
    deletePermanentlyLinkAction,
    filterLinksAction,
    saveRemoteLinksAction,
} from '../../../../store/listLinksReducer'
import {useDispatch, useSelector} from 'react-redux'
import EditLinkButton from './EditLinkButton/EditLinkButton'

const ItemLinks = ({link}) => {
    const currentGroup = useSelector(({listGroups}) => listGroups.currentGroup)
    const dispatch = useDispatch()
    const onRemoveLink = (id) => {
        if (currentGroup === 'Корзина') {
            dispatch(deletePermanentlyLinkAction(id))
        } else if (currentGroup === 'Все закладки') {
            dispatch(saveRemoteLinksAction(link))
            dispatch(deleteLinkAction(id))
            dispatch(allLinksAction(link))
        } else if (currentGroup === link.currentGroup) {
            dispatch(saveRemoteLinksAction(link))
            dispatch(deleteLinkAction(id))
            dispatch(filterLinksAction(link.currentGroup))
        } else {
            dispatch(saveRemoteLinksAction(link))
            dispatch(deleteLinkAction(id))
        }
    }

    return (
        <div>
            <Card sx={{minWidth: 275, marginBottom: '10px', backgroundColor: '#e6e8e8'}}>
                <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom value={link.nameLink}>
                            {link.nameLink}
                        </Typography>

                        <Typography variant="body2">
                            <Link href={link.url} underline="always">
                                {link.url}
                            </Link>
                        </Typography>

                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {link.descriptionLink}
                        </Typography>
                    </div>

                    <CardActions sx={{p: 0, alignItems: 'flex-start'}}>
                        <EditLinkButton link={link} />
                        <IconButton type="submit" sx={{p: '8px'}} onClick={() => onRemoveLink(link.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default ItemLinks
