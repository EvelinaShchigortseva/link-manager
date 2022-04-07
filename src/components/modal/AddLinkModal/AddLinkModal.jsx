import * as React from "react";
import {Button, Dialog, DialogContent} from "@mui/material";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import './AddLinkModal.css'
import {useDispatch, useSelector} from "react-redux";
import {addLinkAction} from "../../../store/listLinksReducer";


export default function AddLinkModal({isOpen, handleOpen}) {
    let select

    const [bookmark, setBookmark] = React.useState({
        id: Date.now(),
        nameLink: '',
        url: '',
        descriptionLink: '',
        currentGroup: '',
    })
    const [checked, setChecked] = React.useState(false);

    // const [isOpen, setIsOpen] = React.useState(false);

    const dispatch = useDispatch()

    const groups = useSelector(state => state.listGroups.listGroups)

    
    const handleChange = (event: SelectChangeEvent) => {
        setBookmark({...bookmark, currentGroup: event.target.value})
        console.log(bookmark)
    };

    // const handleOpen = () => setIsOpen((prevState) => !prevState);

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    if (!checked) {
        select =
            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Group</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bookmark.currentGroup}
                    onChange={handleChange}
                >
                    {groups.map((group) => (
                        <MenuItem value={group}>{group}</MenuItem>
                    ))}
                </Select>
            </FormControl>
    } else {
        select = <div>Список для чтения</div>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checked) {
            setBookmark({...bookmark, currentGroup: 'Список для чтения'})
        }

        dispatch(addLinkAction(bookmark))

        setBookmark({
            id: Date.now(),
            nameLink: '',
            url: '',
            descriptionLink: '',
            currentGroup: '',
        })
        handleOpen()
    }
    return (
        <div>
            <Dialog sx={{height: '700px'}} open={isOpen} onClose={handleOpen}>
                <DialogTitle>Добавить ссылку</DialogTitle>
                <DialogContent>
                    <form className="form" onSubmit={handleSubmit}>
                        <TextField label="Название ссылки" onChange={(e) => {
                            setBookmark({...bookmark, nameLink: e.target.value})
                        }}/>
                        <TextField label="Url" onChange={(e) => {
                            setBookmark({...bookmark, url: e.target.value})
                        }}/>
                        <TextField label="Описание" onChange={(e) => {
                            setBookmark({...bookmark, descriptionLink: e.target.value})
                        }}/>

                        {select}

                        <FormControlLabel
                            control={
                                <Checkbox checked={checked} onChange={handleChangeCheckbox}/>
                            }
                            label="Список для чтения"
                        />

                        <DialogActions>
                            <Button disabled={false} type="submit" color="inherit" sx={{backgroundColor: "#e6e8e8"}}>
                                Добавить ссылку
                            </Button>
                            <Button color="inherit" sx={{backgroundColor: "#e6e8e8"}} onClick={handleOpen}>
                                Закрыть
                            </Button>

                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
