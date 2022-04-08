import React, { useState } from "react";
import { Divider, ListItemButton, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addGroupAction } from "../../store/listGroupsReducer";
import "./sidebar.css";

export function Sidebar() {
  const [group, setGroup] = useState("");
  const groups = useSelector((state) => state.listGroups.listGroups);

  const dispatch = useDispatch();

  const addGroup = () => {
    dispatch(addGroupAction(group));
    setGroup("");
  };

  return (
    <div className="sidebar">
      <div className="row">
        {" "}
        <TextField
          id="standard-basic"
          label="Добавить группу"
          size="small"
          variant="standard"
          onChange={(e) => {
            setGroup(e.target.value);
          }}
          value={group}
        />
        <IconButton aria-label="delete" size="small" onClick={addGroup}>
          <AddIcon fontSize="inherit" />
        </IconButton>
      </div>

      {groups.map((group) => (
        <ListItemButton component="a">
          <ListItemText primary={group} />
        </ListItemButton>
      ))}

      <Divider />

      <ListItemButton component="a">
        <ListItemText primary="Список для чтения" />
      </ListItemButton>

      <ListItemButton component="a">
        <ListItemText primary="Корзина" />
      </ListItemButton>
    </div>
  );
}
