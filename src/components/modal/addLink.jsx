import * as React from "react";
import { Button, Stack } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [group, setGroup] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setGroup(event.target.value);
    };

    const groups = [1, 2, 3];

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{ width: 300 }} startIcon={<StarOutlinedIcon />} onClick={handleOpen}>
                    Добавить ссылку
                </Button>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Добавить ссылку
                    </Typography>

                    <Divider />

                    <FormGroup>
                        <FormControl margin="normal" fullWidth>
                            <TextField id="standard-basic" label="Url" variant="standard" fullWidth />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={"группа"}
                                label="Группа"
                                onChange={handleChange}
                            >
                                {groups.map((group) => (
                                    <MenuItem value={group}>{group}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControlLabel control={<Checkbox defaultChecked />} label="Список для чтения" />
                        <Button variant="contained">Добавить </Button>
                    </FormGroup>
                </Box>
            </Modal>
        </div>
    );
}
