import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./itemLinks.css";
import EditModal from "../../../modal/EditModal/EditModal";

const ItemLinks = () => {
    return (
        <div>
            <Card sx={{ minWidth: 275, marginBottom: "10px", backgroundColor: "#e6e8e8" }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            имя ссылки
                        </Typography>

                        <Typography variant="body2">ссылка</Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            описание
                        </Typography>
                    </div>

                    <CardActions sx={{ p: 0, alignItems: "flex-start" }}>
                        <EditModal />
                        <IconButton type="submit" sx={{ p: "8px" }} aria-label="search">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default ItemLinks;
