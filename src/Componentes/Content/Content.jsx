
import '../../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';

const Content = ({reporte}) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: '5rem', backgroundColor: reporte?.colorSecundario }}>
            <iframe title={reporte?.tema} width="800" height="510" src={reporte.url} frameborder="0" allowFullScreen="true"></iframe>
        </Box>);
};

export default Content;
