import * as React from "react";
import "./Search.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
    return (
        <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 800, height: 36 }}>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Поиск" />
            <IconButton type="submit" sx={{ p: "8px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
