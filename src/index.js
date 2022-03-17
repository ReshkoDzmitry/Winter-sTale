import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main:'#222222'
        },
        secondary: {
            main: '#a80d0d'
        },
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
