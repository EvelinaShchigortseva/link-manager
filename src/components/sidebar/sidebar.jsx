import {useState} from "react";

import {Divider, ListItemButton, ListItemText, ListSubheader} from "@mui/material";
import "./sidebar.css"

export function Sidebar() {
    const [groups, setGroups] = useState(['Один','Два'])

    return(
        <div className='sidebar'>

            <ListSubheader component="div" id="nested-list-subheader">
                Добавить закладку +
            </ListSubheader>

            {groups.map(group=>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary={group} />
                </ListItemButton>
            )}

            <Divider />

            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary='Список для чтения' />
            </ListItemButton>

            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary='Корзина' />
            </ListItemButton>

        </div>
    )
}

