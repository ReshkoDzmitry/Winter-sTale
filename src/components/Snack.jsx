import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const Snack = ({isOpen, handleClose = Function.prototype}) => {
    return (
        <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={2000} anchorOrigin={{ vertical:'bottom', horizontal:'right' }} message="Товар добавлен в корзину" />
    );
};

export default Snack;