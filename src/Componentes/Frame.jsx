import LogoIFTS24 from '../LogoIFTS24.webp';
import '../App.css';
import theme from '../theme';
import Content from './Content/Content';
import * as React from 'react';
import './Frame.css'
import { Fragment, useState, useEffect } from 'react';
import { AppBar,Avatar,Box , Button,CssBaseline, Drawer,Grid, IconButton,List,ListItemIcon,ListItem,ListItemButton,ListItemText, Popover,Typography,Toolbar  } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BalanceIcon from '@mui/icons-material/Balance';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { motion, useAnimate, usePresence, AnimatePresence } from "framer-motion"
const Frame = () => {
  const reportes = [
    {
      nombreAlumno: 'German Zaragosa',
      tema: 'Economia',
      colorEnfasis: '#118DFF',
      colorSecundario: '#1A1A1A',
      url: "https://app.powerbi.com/view?r=eyJrIjoiMTMxYjliNGYtMWZkZi00N2FkLWFmY2YtZWFlYzFjMGQ2NzhmIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      //url: <iframe title="ReporteGerFinal (1)" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMTMxYjliNGYtMWZkZi00N2FkLWFmY2YtZWFlYzFjMGQ2NzhmIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe><iframe title={'Economia'} width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: CurrencyExchangeIcon,
    },
    {
      nombreAlumno: 'Vanina Mendez',
      tema: 'Indice de desarrollo humano',
      colorEnfasis: '#E66C37',
      colorSecundario: '#282024',
      url: "https://app.powerbi.com/view?r=eyJrIjoiNTVhOGM3YzItOWI4My00YWI3LTkzYjItMTg1OGRjNDRjNjc2IiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      // url: <iframe title="Reporte_Final_Vani" width="800" height="636" src="https://app.powerbi.com/view?r=eyJrIjoiNTVhOGM3YzItOWI4My00YWI3LTkzYjItMTg1OGRjNDRjNjc2IiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe><iframe title='Desigualdad' width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: Diversity3Icon,
    },
    {
      nombreAlumno: 'Juan Manual ',
      tema: 'Desigualdad',
      colorEnfasis: '#E66C37',
      colorSecundario: '#282024',//Color secundario
      url: "https://app.powerbi.com/view?r=eyJrIjoiYzZhMDZlMTYtMTAzNS00OTEyLWFjM2MtMzY2YmFjOTUwZjc5IiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      // url: <iframe title="Trabajo_Final_PW_BI_Ultimo_JM (1)" width="800" height="636" src="https://app.powerbi.com/view?r=eyJrIjoiYzZhMDZlMTYtMTAzNS00OTEyLWFjM2MtMzY2YmFjOTUwZjc5IiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe><iframe title='Desigualdad' width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: BalanceIcon,
    },
    {
      nombreAlumno: 'Rodolfo',
      tema: 'Educacion',
      colorEnfasis: '#00FE33',
      colorSecundario: '#1F2722',
      url:"https://app.powerbi.com/view?r=eyJrIjoiY2NmZmM5YWItYmJkNS00MTNhLWFhZTMtM2JjZmM3MzkyMDdiIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      //url: <iframe title="TPGrupalRoli(Educacion)" width="800" height="636" src="https://app.powerbi.com/view?r=eyJrIjoiY2NmZmM5YWItYmJkNS00MTNhLWFhZTMtM2JjZmM3MzkyMDdiIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe><iframe title='Educacion' width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: MenuBookIcon,
    },
    {
      nombreAlumno: 'Laura Pajaro',
      tema: 'Salud materna y perinatal',
      colorEnfasis: '#F20690',
      colorSecundario: '#282024',
      url: "https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      //url:<iframe title="TPGRUPAL" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> <iframe title='Salud Materna y perinatal' width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: HealthAndSafetyIcon,
    },
  
    

  ]
  const [reporte, setReporte] = useState(reportes[0])
  const [minimized, setMinimized] = useState(false);
  const TopBar = () => {
    return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: '100%', left: 0 }}>
        {/* Desktop Version */}
        <Toolbar sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', backgroundColor: reporte?.colorSecundario } }}>
          <Grid container direction={'row'} alignItems={'center'}>
            {/* Logo */}
            <Grid item xs={4}>
              <img src={LogoIFTS24} alt="Logo IFTS 24" style={{ display: 'flex', justifyContent: 'flex-start' }} width={'104.2px'} height={'32.875px'} />
            </Grid>
            {/* Perfil */}
            <Grid item xs={4}>
              <Typography variant='h5' fontWeight='bold' textAlign={'center'} children={minimized ? reporte?.tema : ''} />
            </Grid>
            <Grid item xs={4}>
              <Typography  textAlign={'center'} children={reporte?.nombreAlumno} />
              <Box style={{ position: 'absolute', marginTop: '15px', top: '0px', right: '20px' }} >
                <IconButton component={motion.div} whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }} sx={{ p: 0 }} onClick={() => console.log('avatar')}>
                  <Avatar alt={reporte?.nombreAlumno} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>)
  };

  const SideBar = () => {
    const maximizedWidth = '18rem';
    const minimizedWidth = '4.5rem';
  
    const collapseIconParams = {
      sx: { color: reporte?.colorEnfasis, width: '2.5rem', height: '2.5rem', backgroundColor: reporte?.colorSecundario, borderRadius: '2rem', padding: '.3rem', boxShadow: '#80808029 1px 1px 2px 2px', border: 'solid 3px ' + reporte?.colorEnfasis },
      onClick: e => setMinimized(!minimized)
    };
    const StdCategory = (props) => {
      const [anchorEl, setAnchorEl] = React.useState({});
      // Function to handle popover open for a specific category
      const handlePopoverOpen = (event, label) => {
        minimized ?
          setAnchorEl({ [label]: event.currentTarget })
          : setAnchorEl(anchorEl)
      };

      // Function to handle popover close for a specific category
      const handlePopoverClose = (label) => {
        minimized ?
          setAnchorEl({ ...anchorEl, [label]: null })
          : setAnchorEl(anchorEl)
      };
      // Function to check if a popover for a specific category is open
      const isPopoverOpen = (label) => Boolean(anchorEl[label]);
      const { label, index, Icon, color } = props;
      return (
        <>
          {<>
            <ListItem disablePadding onClick={() => setReporte(reportes[index])}
              aria-owns={isPopoverOpen(label) ? 'aria-' + label : undefined}
              aria-haspopup="true"
              onMouseEnter={(event) => handlePopoverOpen(event, label)}
              onMouseLeave={() => handlePopoverClose(label)} >
              <ListItemButton component={motion.div} whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }}>
                <ListItemIcon>
                  <Icon sx={{ color: `${reporte.tema === label && minimized ? theme.palette.secondary.light : null}`, mb: minimized ? '1vh' : 0 }} />
                </ListItemIcon>
                {minimized ? null : <ListItemText primary={label} sx={{ color: `${reporte.tema === label ? theme.palette.secondary.light : null}`, fontWeight: 'bold' }} />}
              </ListItemButton>
            </ListItem>
            <Popover
              id={'aria-' + label}
              sx={{
                pointerEvents: 'none',
              }}
              open={isPopoverOpen(label)}
              anchorEl={anchorEl[label]}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              onClose={() => handlePopoverClose(label)}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>{label}</Typography>
            </Popover>
          </>}
        </>
      )
    };
    return (
      <>
        <Button component={motion.div} whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }} sx={{ position: 'fixed', top: '90vh', left: minimized ? '2.5rem' : '16.0rem', zIndex: 1299 }}>
          {minimized ? <ArrowForwardIosIcon {...collapseIconParams} /> : <ArrowBackIosNewIcon {...collapseIconParams} />}
        </Button>
        <Drawer variant="permanent" className='myDrawer' sx={{ width: minimized ? minimizedWidth : maximizedWidth, [`& .MuiDrawer-paper`]: { width: minimized ? minimizedWidth : maximizedWidth, boxSizing: 'border-box', backgroundColor: reporte?.colorEnfasis } }} >
          <Toolbar />
          <Box sx={{ overflow: 'auto', height: '100%', backgroundColor: reporte?.colorEnfasis }}>
            <List>
              <Fragment>
                {reportes?.map((r, i) => {
                  return <StdCategory label={r.tema} index={i} color={r.colorEnfasis} Icon={r.icon} ></StdCategory>
                })}
              </Fragment>
            </List>
          </Box>
        </Drawer>
      </>
    )
  };
 

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopBar />
      
        <SideBar></SideBar>
        <Content reporte={reporte}/>
      </Box>
    </div>);
}

export default Frame;
