import * as React from "react";
import "./Search.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
    return (
        <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, height: 28 }}>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Поиск" />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
