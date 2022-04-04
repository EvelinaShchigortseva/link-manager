import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export default function AddLink() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<StarOutlinedIcon />}>
                Добавить
            </Button>
        </Stack>
    );
}
