import * as React from "react";
import { Button, Dialog, DialogContent, Stack } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import "./AddLinkModal.css";
import { useDispatch, useSelector } from "react-redux";
import { addLinkAction } from "../../../store/listLinksReducer";
import { getListGroups } from "../../../store/listGroupsReducer";
import { useState } from "react";

const INITIAL_STATE = {
  id: null,
  nameLink: "",
  url: "",
  descriptionLink: "",
  currentGroup: "",
};

export default function AddLinkModal() {

  const [bookmark, setBookmark] = useState(INITIAL_STATE);
  const [checked, setChecked] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();

  const groups = useSelector(getListGroups);

  const handleGroupChange = (event) => {
    setBookmark((prevState) => ({
      ...prevState,
      currentGroup: event.target.value,
    }));
  };

  const handleOpen = () => setIsOpen((prevState) => !prevState);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...bookmark,
      currentGroup: checked ? "Список для чтения" : bookmark.currentGroup,
      id: Date.now(),
    };
    dispatch(addLinkAction(payload));
    setBookmark(INITIAL_STATE);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          sx={{ width: 300 }}
          startIcon={<StarOutlinedIcon />}
          onClick={handleOpen} >
          Добавить ссылку
        </Button>
      </Stack>

      <Dialog sx={{ height: "700px" }} open={isOpen} onClose={handleOpen}>
        <DialogTitle>Добавить ссылку</DialogTitle>
        <DialogContent>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              label="Название ссылки"
              onChange={(e) => {
                setBookmark({ ...bookmark, nameLink: e.target.value });
              }}
            />
            <TextField
              label="Url"
              onChange={(e) => {
                setBookmark({ ...bookmark, url: e.target.value });
              }}
            />
            <TextField
              label="Описание"
              onChange={(e) => {
                setBookmark({ ...bookmark, descriptionLink: e.target.value });
              }}
            />
            {checked ? (
              <div>Список для чтения</div>
            ) : (
              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Group</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bookmark.currentGroup}
                  onChange={handleGroupChange}
                >
                  {groups.map((group) => (
                    <MenuItem value={group}>{group}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={handleChangeCheckbox} />
              }
              label="Список для чтения"
            />
            <DialogActions>
              <Button
                disabled={false}
                type="submit"
                color="inherit"
                sx={{ backgroundColor: "#e6e8e8" }}
              >
                Добавить ссылку
              </Button>
              <Button
                color="inherit"
                sx={{ backgroundColor: "#e6e8e8" }}
                onClick={handleOpen}>
                    Закрыть
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
