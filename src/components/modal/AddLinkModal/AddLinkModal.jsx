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
import {
    addLinkActionCreator,
    updateDescriptionActionCreator,
    updateLinkActionCreator,
    updateUrlActionCreator,
} from "../../../store/listLinksReducer";

export default function AddLinkModal() {
    const [isOpen, setIsOpen] = React.useState(false);

    const dispatch = useDispatch();

    const groups = useSelector((state) => state.listGroups.listGroups);

    const [checked, setChecked] = React.useState(true);

    // const handleChange = (event: SelectChangeEvent) => {
    //     setBookmark({ ...bookmark, currentGroup: event.target.value });
    //     console.log(bookmark);
    // };

    const handleOpen = () => setIsOpen((prevState) => !prevState);

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        console.log();
    };

    // const [bookmark, setBookmark] = useState({
    //     id: Date.now(),
    //     nameLink: "",
    //     url: "",
    //     descriptionLink: "",
    //     currentGroup: "",
    // });

    // const handleSubmit = () => {
    //     dispatch(addLinkAction(bookmark));
    //     setBookmark({
    //         nameLink: "",
    //         url: "",
    //         descriptionLink: "",
    //         currentGroup: "",
    //     });
    //     setIsOpen((prevState) => !prevState);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addLinkActionCreator());
        handleOpen();
    };

    const onSetLink = (e) => {
        let link = e.target.value;
        dispatch(updateLinkActionCreator(link));
    };
    const onSetUrl = (e) => {
        dispatch(updateUrlActionCreator(e.target.value));
    };
    const onSetDescription = (e) => {
        dispatch(updateDescriptionActionCreator(e.target.value));
    };

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" sx={{ width: 300 }} startIcon={<StarOutlinedIcon />} onClick={handleOpen}>
                    Добавить ссылку
                </Button>
            </Stack>

            <Dialog sx={{ height: "700px" }} open={isOpen} onClose={handleOpen}>
                <DialogTitle>Добавить ссылку</DialogTitle>
                <DialogContent>
                    <form className="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Название ссылки"
                            // onChange={(e) => {
                            //     setBookmark({ ...bookmark, nameLink: e.target.value });
                            // }}
                            onChange={onSetLink}
                        />
                        <TextField
                            label="Url"
                            // onChange={(e) => {
                            //     setBookmark({ ...bookmark, url: e.target.value });
                            // }}
                            onChange={onSetUrl}
                        />
                        <TextField
                            label="Описание"
                            // onChange={(e) => {
                            //     setBookmark({ ...bookmark, descriptionLink: e.target.value });
                            // }}
                            onChange={onSetDescription}
                        />

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Group</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={bookmark.currentGroup}
                                // onChange={handleChange}
                            >
                                {groups.map((group) => (
                                    <MenuItem key={group.id} value={group.name}>
                                        {group.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleChangeCheckbox} />}
                            label="Список для чтения"
                        />

                        <DialogActions>
                            <Button disabled={false} type="submit" color="inherit" sx={{ backgroundColor: "#e6e8e8" }}>
                                Добавить ссылку
                            </Button>
                            <Button color="inherit" sx={{ backgroundColor: "#e6e8e8" }} onClick={handleOpen}>
                                Закрыть
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
