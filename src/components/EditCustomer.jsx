import React from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

export default function EditCustomer(props) {

    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });
    const { saveObject } = props;

    const handleClickOpen = () => {
        const { customer } = props;
        // console.log(customer.links[0].href)
        setCustomer({
            firstname: customer.firstname,
            lastname: customer.lastname,
            streetaddress: customer.streetaddress,
            postcode: customer.postcode,
            city: customer.city,
            email: customer.email,
            phone: customer.phone
        })
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChangeInput = event => {
        setCustomer({ ...customer, [event.target.name]: event.target.value })
    };

    const handleUpdate = () => {
        saveObject(customer, props.customer.links[0].href, 'put');
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title="Edit customer">
                <EditIcon
                    color="secondary"
                    cursor='pointer'
                    fontSize='small'
                    onClick={handleClickOpen}
                />
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit customer</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstname"
                        value={customer.firstname}
                        name="firstname"
                        label="Firstname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastname"
                        value={customer.lastname}
                        name="lastname"
                        label="Lastname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="streetaddress"
                        value={customer.streetaddress}
                        name="streetaddress"
                        label="Streetaddress"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="postcode"
                        value={customer.postcode}
                        name="postcode"
                        label="Postcode"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        value={customer.city}
                        name="city"
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        value={customer.email}
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={event => handleChangeInput(event)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        value={customer.phone}
                        name="phone"
                        label="phone"
                        type="Phone"
                        fullWidth
                        variant="standard"
                        onChange={event => handleChangeInput(event)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}