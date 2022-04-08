import React from "react";
import "./EditModal.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { changeLinkAction } from "../../../store/listLinksReducer";


function EditModal({ id, nameLink, link, description, isOpen, handleOpenModal, currentGroup}) {

  const INITIAL_STATE = {
    id: id,
    nameLink: nameLink,
    url: link,
    descriptionLink: description,
    currentGroup: currentGroup,
  };

  console.log(INITIAL_STATE);

  const [bookmark, setBookmark] = useState(INITIAL_STATE);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeLinkAction(bookmark));
    handleOpenModal()
  }


  return (
    <div>
      <Dialog open={isOpen} onClose={handleOpenModal}>
        <DialogTitle>Редактирование</DialogTitle>
        <DialogContent>
          <form className="form" onSubmit={handleSubmit}>
            <TextField label="Имя" value={bookmark.nameLink} onChange={(e) => { setBookmark({ ...bookmark, nameLink: e.target.value })}} />
            <TextField label="Url" value={bookmark.url} onChange={(e) => {setBookmark({ ...bookmark, url: e.target.value })}}  />
            <TextField
             
              onChange={(e) => {
                setBookmark({ ...bookmark, descriptionLink: e.target.value })
              }}
              multiline
              minRows={2}
              value={bookmark.descriptionLink}

            />

            <DialogActions>
              <Button
                color="inherit"
                sx={{ backgroundColor: "#e6e8e8" }}
                onClick={handleOpenModal}
              >
                Закрыть
              </Button>
              <Button
                disabled={false}
                type="submit"
                color="inherit"
                sx={{ backgroundColor: "#e6e8e8" }}
              >
                Редактировать
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditModal;
