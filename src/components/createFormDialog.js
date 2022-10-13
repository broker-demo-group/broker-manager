import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import axios from "axios";
import {TRANSFER_API} from "../const";


const ccyArr = ["BTC", "ETH", "USDT"]

export default function CreateFormDialog({subAccount}) {

    const [open, setOpen] = useState(false);
    const [ccy, setCcy] = useState("BTC");
    const [from, setFrom] = useState("6")
    const [to, setTo] = useState("6")
    const [type, setType] = useState("1")
    const [amt, setAmt] = useState("0");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubscribe = () => {
        console.log("ccy", ccy)
        console.log("from", from)
        console.log("to", to)
        console.log("subAct", subAccount)
        console.log("type", type)
        console.log("amt", amt)
        axios.post(TRANSFER_API, {
                amt: amt,
                ccy: ccy,
                from: from,
                to: to,
                type: type
            }
        )
            .then(response => {
                    console.log("response", response.data.data)
                }
            )
            .catch(e => {
                    console.log("err", e)
                }
            )

        handleClose()
    };


    const handleOnselectType = (e) => {
        if (e.target.value === '1') {
            setType(1)
            setFrom(6)
            setTo(6)
            console.log("type1", type)
        } else {
            setType(2)
            setFrom(6)
            setTo(6)
            console.log("type2", type)
        }
    }

    const handleSelectCcy = (e) => {
        setCcy(e.target.value)
    }

    const handleOnchange = () => {
        console.log("提交")
    };

    return (<Fragment>
        {/*<Fab size={'small'} color={'default'} aria-label={'add'} onClick={handleClickOpen}>*/}
        {/*    <AddIcon/>*/}
        {/*</Fab>*/}
        <Button variant="outlined" onClick={handleClickOpen}>transfer</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>transfer</DialogTitle>
            <DialogContent>
                <form>
                    <Box sx={{minWidth: 380}}>
                        <FormControl id="transfer-select" fullWidth style={{marginTop: 20}}>
                            <InputLabel id='transfer-select'>transfer type</InputLabel>
                            <Select id='transfer-select'
                                    onChange={handleOnselectType}
                            >
                                <MenuItem key='1' value='1'>master account to sub-account</MenuItem>
                                <MenuItem key='2' value='2'>sub-account to master account</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl id="choose ccy" fullWidth style={{marginTop: 20}}>
                            <InputLabel id='choose ccy'>currency</InputLabel>
                            <Select id='choose-ccy'
                                    onChange={handleSelectCcy}
                            >
                                {
                                    ccyArr.map((ccy, i) =>
                                        <MenuItem value={ccy}>{ccy}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={amt}
                        label="$"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setAmt(e.target.value)
                        }}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubscribe}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    </Fragment>);
}
