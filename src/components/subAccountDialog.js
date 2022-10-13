import {Button} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {Fragment, useState} from 'react';

export default function SubAccountDialog({subAccount}) {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };


    return (<Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>info</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle> sub-account info</DialogTitle>
            <DialogContent>
                sub-account info
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </Fragment>);
}
