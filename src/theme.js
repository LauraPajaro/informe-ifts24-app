import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid';

export default {
    ...esES,
    ...{
        typography: {
            "fontFamily": `"Roboto", sans-serif`,//`"Rubik", sans-serif`,////`"Poppins", sans-serif`,//`"wotfard", sans-serif`,
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500,
            "bold": 600,
            "color": "#555555",
            "h7": 8 
        },
        palette: {
            primary: {
                //main: '#65D673',
                main: '#65D673', //Verde Elidia
                dark: '#5bc168',
                contrastText: '#fff',
            },
            secondary: {
                main: '#9e9e9e',
                light: '#e0e0e0',
                dark: '#616161',
            },
            info: {
                main: '#4399c3'
            },
            success: {
                main: '#65D673'
            },
            warning: {
                main: '#ff9800'
            },
            danger: {
                main: '#c34366',
                //oldColor: '#d32f2f'
            },
        },

    }
};