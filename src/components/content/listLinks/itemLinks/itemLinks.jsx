import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import './itemLinks.css'

const ItemLinks = () => {
    return (
        <div>
            <Card sx={{ minWidth: 275, marginBottom: '10px',backgroundColor: '#e6e8e8' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       имя ссылки
                    </Typography>

                    <Typography variant="body2">
                        ссылка
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                       описание
                    </Typography>

                    <CardActions>
                        <DriveFileRenameOutlineIcon aria-label="delete" size="small">
                            <DeleteIcon fontSize="inherit" />
                        </DriveFileRenameOutlineIcon>
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>

                    </CardActions>
                </CardContent>
            </Card>

        </div>
    );
};

export default ItemLinks;