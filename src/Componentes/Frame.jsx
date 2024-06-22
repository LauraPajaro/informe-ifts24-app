import LogoIFTS24 from '../LogoIFTS24.webp';
import '../App.css';
import theme from '../theme';

import * as React from 'react';
import './Frame.css'
import { Fragment, useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import BalanceIcon from '@mui/icons-material/Balance';
import SummarizeIcon from '@mui/icons-material/Summarize';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DiscountIcon from '@mui/icons-material/Discount';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdbIcon from '@mui/icons-material/Adb';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogActions } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/FormHelperText';
import Assesment from '@mui/icons-material/Assessment';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArchiveIcon from '@mui/icons-material/Archive';
import Campaign from '@mui/icons-material/Campaign'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Group from '@mui/icons-material/Group';
import ShareIcon from '@mui/icons-material/Share';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid";
import Popover from '@mui/material/Popover';
import { FormContainer, TextFieldElement, AutocompleteElement, SelectElement, SliderElement } from 'react-hook-form-mui';
import { motion, useAnimate, usePresence, AnimatePresence } from "framer-motion"
const Frame = () => {
  const reportes = [
    {
      nombreAlumno: 'German Zaragosa',
      tema: 'Economia',
      colorEnfasis: '#118DFF',
      colorSecundario: '#282024',
      url: "https://app.powerbi.com/view?r=eyJrIjoiYzU5MmVkYmEtMDllNC00NzA3LTllMGMtYzU4OWVjZjViYmViIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      //url: <iframe title={'Economia'} width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: CurrencyExchangeIcon,
    },
    {
      nombreAlumno: 'Laura Pajaro',
      tema: 'Salud Materna y perinatal',
      colorEnfasis: '#F20690',
      colorSecundario: '#282024',
      url: "https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      //url: <iframe title='Salud Materna y perinatal' width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: HealthAndSafetyIcon,
    },
    {
      nombreAlumno: 'Rodolfo',
      tema: 'Educacion',
      colorEnfasis: '#118DFF',
      colorSecundario: '#282024',
      url: "https://app.powerbi.com/view?r=eyJrIjoiYzU5MmVkYmEtMDllNC00NzA3LTllMGMtYzU4OWVjZjViYmViIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      //url: <iframe title='Educacion' width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: MenuBookIcon,
    },
    {
      nombreAlumno: 'Juan Manual y Vanina Mendez',
      tema: 'Desigualdad',
      colorEnfasis: '#118DFF',
      colorSecundario: '#282024',
      url: "https://app.powerbi.com/view?r=eyJrIjoiYzU5MmVkYmEtMDllNC00NzA3LTllMGMtYzU4OWVjZjViYmViIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9",
      // url: <iframe title='Desigualdad' width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>,
      icon: Diversity3Icon,
    },

  ]
  const [reporte, setReporte] = useState(reportes[0])
  const [minimized, setMinimized] = React.useState(false);
  const TopBar = () => {

    const Bar = () => {
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const [anchorElUser, setAnchorElUser] = React.useState(null);

      const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
      const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
      const handleCloseNavMenu = () => setAnchorElNav(null);
      const handleCloseUserMenu = (e, cb) => {
        setAnchorElUser(null);
        return cb ? cb() : null;
      };

      return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: '100%', left: 0 }}>
          {/* Desktop Version */}
          <Toolbar sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', backgroundColor: reporte?.colorSecundario } }}>
            <Grid container direction={'row'} alignItems={'center'}>
              {/* Logo */}
              <Grid item xs={4}>
                <img src={LogoIFTS24} alt="Logo IFTS 24" style={{display: 'flex', justifyContent: 'flex-start'}} width={'104.2px'} height={'32.875px'} />
              </Grid>
              {/* Perfil */}
              <Grid item xs={4}>
                <Typography variant='h5' fontWeight='bold'textAlign={'center'} children={minimized ? reporte?.tema : ''} />
              </Grid>
              <Grid item xs={4}>
              <Typography  fontWeight='bold'textAlign={'center'} children={reporte?.nombreAlumno} />
                <Box style={{ position: 'absolute', marginTop: '15px', top: '0px', right: '20px' }} >
                  <IconButton component={motion.div} whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }} sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                    <Avatar alt={reporte?.nombreAlumno} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>)
    };

    return (
      <Fragment>
        <Bar />
      </Fragment>

    )
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
  const Content = () => {
    return (<Box component="main" sx={{ flexGrow: 1, p: 3, pt: '5rem', backgroundColor: reporte?.colorSecundario }}>

      <iframe title={reporte?.tema} width="800" height="510" src={reporte.url} frameborder="0" allowFullScreen="true"></iframe>

    </Box>)
  };

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopBar />
        <SideBar></SideBar>
        <Content />
      </Box>
      {/* <p>REPORTE LAU</p>
      <iframe title="TPGRUPAL" width="800" height="510" src="https://app.powerbi.com/view?r=eyJrIjoiOWE4MjdlYTQtNGIzZS00MTcwLTk3YzktYmUwNGRkYjAwYTlkIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>

      <p>REPORTE GER</p>
      <iframe title="ReporteGerFinal" width="800" height="836" src="https://app.powerbi.com/view?r=eyJrIjoiYzU5MmVkYmEtMDllNC00NzA3LTllMGMtYzU4OWVjZjViYmViIiwidCI6IjYxZTlhYWViLWFmOWMtNDNmYi1iMjIxLTgwNGU3ZTQ0N2JhNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe> */}
    </div>);
}

export default Frame;
