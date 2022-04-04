import React from "react";
import "./EditModal.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

function EditModal() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpenModal = () => setIsOpen((prevState) => !prevState);

    return (
        <div>
            <IconButton type="submit" sx={{ p: "8px" }} aria-label="search" onClick={handleOpenModal}>
                <EditIcon color="primary" />
            </IconButton>

            <Dialog open={isOpen} onClose={handleOpenModal}>
                <DialogTitle>Редактирование</DialogTitle>
                <DialogContent>
                    <form className="form" onSubmit={() => {}}>
                        <TextField label="Имя" onChange={() => {}} />
                        <TextField label="Url" onChange={() => {}} value="" />
                        <TextField label="Описание" onChange={() => {}} multiline minRows={2} />

                        <DialogActions>
                            <Button color="inherit" sx={{ backgroundColor: "#e6e8e8" }} onClick={handleOpenModal}>
                                Закрыть
                            </Button>
                            <Button disabled={false} type="submit" color="inherit" sx={{ backgroundColor: "#e6e8e8" }}>
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
